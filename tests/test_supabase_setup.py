import pathlib
import re
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
SQL = (ROOT / "supabase_setup.sql").read_text(encoding="utf-8").lower()


class SupabaseSetupTests(unittest.TestCase):
    def test_rls_is_enabled_and_forced(self):
        self.assertIn("enable row level security", SQL)
        self.assertIn("force row level security", SQL)

    def test_all_crud_policies_target_authenticated_users(self):
        for command in ("select", "insert", "update", "delete"):
            pattern = rf"create policy .*?for {command}\s+to authenticated"
            self.assertRegex(SQL, re.compile(pattern, re.DOTALL))

    def test_update_policy_has_using_and_with_check(self):
        update_policy = re.search(
            r'create policy "guide_sync_update_own"(.*?);', SQL, re.DOTALL
        )
        self.assertIsNotNone(update_policy)
        self.assertIn("using ((select auth.uid()) = user_id)", update_policy.group(1))
        self.assertIn("with check ((select auth.uid()) = user_id)", update_policy.group(1))

    def test_data_api_privileges_are_explicit(self):
        self.assertIn("revoke all on table public.guide_sync from public", SQL)
        self.assertIn("revoke all on table public.guide_sync from anon", SQL)
        self.assertIn(
            "grant select, insert, update, delete on table public.guide_sync to authenticated",
            SQL,
        )

    def test_frontend_secret_warning_is_present(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8").lower()
        self.assertIn("service_role", html)
        self.assertIn("publishable key", html)


if __name__ == "__main__":
    unittest.main()
