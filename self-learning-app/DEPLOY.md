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
4.  Անուն դրեք (օրինակ՝ `learnfast-app`) և ստեղծեք այն (Create):
5.  Բացված էջում գտեք "…or push an existing repository from the command line" բաժինը: Պատճենեք այդ տողերը և run արեք ձեր տերմինալում: Դրանք մոտավորապես այս տեսքն ունեն.
    ```bash
    git remote add origin https://github.com/ՁԵՐ_ԱՆՈՒՆԸ/learnfast-app.git
    git push -u origin main
    ```

### Քայլ 2. Տեղադրել Vercel-ում
1.  Մտեք [Vercel Dashboard](https://vercel.com/dashboard):
2.  Սեղմեք **"Add New..."** -> **"Project"**:
3.  Կտեսնեք ձեր GitHub-ի ռեպոզիտորիաները: Գտեք `learnfast-app`-ը և սեղմեք **Import**:
4.  Կարգավորումների էջում ոչինչ փոխել պետք չէ:
5.  Սեղմեք **Deploy**:
6.  Սպասեք մի քանի վայրկյան, և կստանաք ձեր կայքի հղումը (օրինակ՝ `learnfast-app.vercel.app`):

---

> **Important Note / Կարևոր նշում**
> Your API Key is currently inside `script.js`. On a public website, tech-savvy users can see it. For a serious project, use a backend proxy. For this demo, it works fine!
> Ձեր API Key-ը գտնվում է `script.js` ֆայլի մեջ: Հանրային կայքում այն տեսանելի է լինելու: Իրական պրոյեկտների համար պետք է օգտագործել backend, բայց այս օրինակի համար խնդիր չէ:
