
-- Drop overly permissive SELECT policies
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.consultation_bookings;
DROP POLICY IF EXISTS "Users can view their own submissions" ON public.project_assessments;

-- Revoke read access from anon/authenticated to hide from GraphQL schema exposure
REVOKE SELECT ON public.consultation_bookings FROM anon, authenticated;
REVOKE SELECT ON public.project_assessments FROM anon, authenticated;

-- Ensure INSERT still works for public submissions
GRANT INSERT ON public.consultation_bookings TO anon, authenticated;
GRANT INSERT ON public.project_assessments TO anon, authenticated;

-- Ensure service_role retains full access for backend/admin use
GRANT ALL ON public.consultation_bookings TO service_role;
GRANT ALL ON public.project_assessments TO service_role;
