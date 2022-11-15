import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://fzcbjcvtyhnmtkjhipfc.supabase.co';
const PUBLIC_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6Y2JqY3Z0eWhubXRramhpcGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODU5NzYsImV4cCI6MTk4Mzk2MTk3Nn0.XnW71lEf0TBJM8QzvUVpSS0S67wtvscXCvKN0OvKwiA';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
	return {
		getAllVideos() {
			return supabase.from('video').select('*');
		},
	};
}
