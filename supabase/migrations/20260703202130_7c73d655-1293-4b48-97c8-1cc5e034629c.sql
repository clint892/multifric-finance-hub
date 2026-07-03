
DROP POLICY IF EXISTS "Anyone can book consultations" ON public.consultation_bookings;
CREATE POLICY "Anyone can book consultations"
ON public.consultation_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) > 0
  AND length(btrim(email)) > 3
  AND email LIKE '%_@_%.__%'
);

DROP POLICY IF EXISTS "Anyone can submit project assessments" ON public.project_assessments;
CREATE POLICY "Anyone can submit project assessments"
ON public.project_assessments
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) > 0
  AND length(btrim(email)) > 3
  AND email LIKE '%_@_%.__%'
  AND length(btrim(project_description)) > 0
);
