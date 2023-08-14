
console.log("dfdf");
import { createClient } from '@supabase/supabase-mjs';


const supabase = createClient("https://ebuceiyfgahcbctefmrv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWNlaXlmZ2FoY2JjdGVmbXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTIxODQsImV4cCI6MjAwNzEyODE4NH0.JOzIf-BBnveAT1FmEdBpSK7hffuSvjPQjs3xpajzmmc");

async function signUp() {
    try {
        const { user, error } = await supabase.auth.signUp({
            email: 'carlyonja@gmail.com',
            password: 'lol',
        });

        if (error) {
            console.error('Sign-up error:', error);
        } else {
            console.log('User signed up:', user);
            // Redirect or perform other actions after successful sign-up
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Call the sign-up function when needed
signUp();

