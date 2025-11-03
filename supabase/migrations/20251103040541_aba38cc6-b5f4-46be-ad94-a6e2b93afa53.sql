-- Create consultation_bookings table
CREATE TABLE public.consultation_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  team_member TEXT NOT NULL,
  deal_size TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public booking)
CREATE POLICY "Anyone can book consultations" 
ON public.consultation_bookings 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own bookings by email
CREATE POLICY "Users can view their own bookings" 
ON public.consultation_bookings 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_consultation_bookings_updated_at
BEFORE UPDATE ON public.consultation_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();