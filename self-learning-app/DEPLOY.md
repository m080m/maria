# How to Deploy to Vercel / Ինչպես տեղադրել Vercel-ում

Here are the steps to publish your website online using Vercel.
Ահա ձեր կայքը Vercel-ում տեղադրելու քայլերը:

---

## 🇺🇸 English Instructions

### Prerequisites
1.  A **GitHub** account (github.com).
2.  A **Vercel** account (vercel.com) - you can sign up using GitHub.

### Step 1: Push Code to GitHub
You need to put your code into a GitHub repository.
1.  Open your terminal in the project folder: `self-learning-app`.
2.  Initialize Git:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
3.  Go to GitHub.com, click the **+** icon, and select **New repository**.
4.  Name it (e.g., `learnfast-app`), leave it Public, and create it.
5.  Copy the commands shown under "…or push an existing repository from the command line" and run them in your terminal. They look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/learnfast-app.git
    git push -u origin main
    ```

### Step 2: Deploy on Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  You will see your list of GitHub repositories. Find `learnfast-app` and click **Import**.
4.  In the configuration screen, you don't need to change anything for a simple HTML/JS site.
5.  Click **Deploy**.
6.  Wait a few seconds, and you will get a live URL (e.g., `learnfast-app.vercel.app`)!

### Step 4: Configure Secrets (Environment Variables)
Because we moved the API Key out of the code for security, you must tell Vercel what it is.

1.  Go to your Project Settings on Vercel.
2.  Click **"Environment Variables"** (left sidebar).
3.  Add a new variable:
    *   **Key**: `GEMINI_API_KEY`
    *   **Value**: `AIzaSyDMMqNGnGtY9OwHA261DVbopjb5lP7A3Lc` (Your key from `apikey.txt`)
4.  Click **Save**.
5.  Go to the **Deployments** tab and Click **Redeploy** (or just push a small change to GitHub) for it to take effect.

---

## 🇦🇲 Հայերեն Հրահանգներ

### Նախապայմաններ
1.  **GitHub** հաշիվ (github.com):
2.  **Vercel** հաշիվ (vercel.com) - կարող եք գրանցվել հենց GitHub-ի միջոցով:

### Քայլ 1. Կոդը գցել GitHub
Ձեր ֆայլերը պետք է լինեն GitHub-ում:
1.  Բացեք տերմինալը պրոյեկտի թղթապանակում՝ `self-learning-app`:
2.  Նախապատրաստեք Git-ը (հավաքեք այս հրամանները):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
3.  Գնացեք GitHub.com, սեղմեք **+** նշանը և ընտրեք **New repository** (Նոր ռեպոզիտորիա):
4.  Անուն դրեք (օրինակ՝ `self-learning-app`) և ստեղծեք այն (Create): **Ընտրեք Private**:
5.  Բացված էջում գտեք "…or push an existing repository from the command line" բաժինը: Պատճենեք այդ տողերը և run արեք ձեր տերմինալում: Դրանք մոտավորապես այս տեսքն ունեն.
    ```bash
    git remote add origin https://github.com/ՁԵՐ_ԱՆՈՒՆԸ/self-learning-app.git
    git push -u origin main
    ```

### Քայլ 2. Տեղադրել Vercel-ում
1.  Մտեք [Vercel Dashboard](https://vercel.com/dashboard):
2.  Սեղմեք **"Add New..."** -> **"Project"**:
3.  Կտեսնեք ձեր GitHub-ի ռեպոզիտորիաները: Գտեք `self-learning-app`-ը և սեղմեք **Import**:
4.  Կարգավորումների էջում ոչինչ փոխել պետք չէ:
5.  Սեղմեք **Deploy**:

### Քայլ 3. Գաղտնի բանալին (Secrets)
Քանի որ մենք հանեցինք API Key-ը կոդի միջից, պետք է Vercel-ին առանձին ասել դրա մասին:

1.  Գնացեք ձեր պրոյեկտի **Settings** Vercel-ում:
2.  Ձախ կողմից ընտրեք **"Environment Variables"**:
3.  Ավելացրեք նոր տվյալ.
    *   **Key**: `GEMINI_API_KEY`
    *   **Value**: `AIzaSyDMMqNGnGtY9OwHA261DVbopjb5lP7A3Lc` (Ձեր բանալին)
4.  Սեղմեք **Save**:
5.  Գնացեք **Deployments** բաժին և արեք **Redeploy** (կամ ուղղակի նոր փոփոխություն ուղարկեք GitHub), որպեսզի այն աշխատի:
