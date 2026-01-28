## Deployment Environment Variables

For a successful production deployment on Vercel, configure the following environment variables in your project settings.

### Required Variables

1. **RESEND_API_KEY**
   - **Description**: Secret API key from Resend used to send transactional emails (quote form, contact, etc.).
   - **Example value**: `re_*********************`
   - **Where to get it**: Resend dashboard → **API Keys**.
   - **Scope**: Add as an **Environment Variable** in Vercel for:
     - Environment: `Production` (and optionally `Preview` / `Development`).

2. **CONTACT_EMAIL**
   - **Description**: Destination email address for contact/quote form submissions.
   - **Example value**: `anthonyhasrouny8@gmail.com`
   - **Scope**: Set in Vercel as an **Environment Variable** for:
     - `Production` (and optionally `Preview` / `Development`).

3. **FROM_EMAIL**
   - **Description**: The “from” email used by Resend when sending emails.
   - **Example value**: `onboarding@resend.dev` (or a verified domain email like `no-reply@anthonyhasrouny.com`).
   - **Scope**: Set in Vercel as an **Environment Variable** for:
     - `Production` (and optionally `Preview` / `Development`).

4. **NEXT_PUBLIC_SITE_URL**
   - **Description**: Public base URL of the deployed site, used for metadata, sitemaps, and robots.txt.
   - **Example value**: `https://anthonyhasrouny.com`
   - **Scope**: Set in Vercel as an **Environment Variable** for:
     - `Production` (and optionally `Preview` / `Development`).

### How to Add Environment Variables in Vercel

1. Go to the Vercel dashboard and select your project.
2. Navigate to **Settings → Environment Variables**.
3. For each variable above:
   - Click **“Add”**.
   - Set **Name** exactly as listed (e.g., `RESEND_API_KEY`).
   - Paste the appropriate **Value**.
   - Choose the correct **Environment** (`Production`, and optionally `Preview` / `Development`).
   - Click **Save**.
4. After updating variables, trigger a new deployment:
   - Either by clicking **“Deploy”** again in Vercel, or
   - By pushing a new commit to your main branch.


