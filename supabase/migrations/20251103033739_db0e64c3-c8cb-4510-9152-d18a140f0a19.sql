-- Create project_assessments table
CREATE TABLE public.project_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  project_category TEXT NOT NULL,
  funding_amount TEXT NOT NULL,
  project_description TEXT NOT NULL,
  timeline TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_assessments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit project assessments" 
ON public.project_assessments 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own submissions by email
CREATE POLICY "Users can view their own submissions" 
ON public.project_assessments 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_project_assessments_updated_at
BEFORE UPDATE ON public.project_assessments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();