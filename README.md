<h2>Links:</h2>

<ul>
    <li><a href="#how-to-use">How-To-Use</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h1 style="text-align: center;">
    <strong>
        RateRipple
    </strong>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf1d60a9-0c77-4860-a7fd-ed6a02feba4a/deploy-status)](https://app.netlify.com/sites/rateripple/deploys)

![](/web-page.PNG)

<p style="font-size: 16px; text-align: center;">RateRipple - simple Web-Application based on React with API that can convert a lot of currencies in world.</p>

<h1 style="text-align: center;" id="how-to-use">
    <strong>
        How To Use:
    </strong>
</h1>

<p style="font-size: 16px;">
    Clone Repo
</p>

`git clone <repo_url>`

<p style="font-size: 16px;">
    Requirements:
</p>

<ul>
    <li>Node 16.x or Newer</li>
    <li>Personal API_Key from <a href="https://app.exchangerate-api.com/">Exchange Rate Api</a></li>
</ul>

<p style="font-size: 16px;">
    Setup:
</p>

```
> npm i
> npm start
```

<p style="font-size: 16px;">
    Add API:
</p>

```
# src/App.tsx

13:    useEffect(() => {
14:     // Delete ${API_KEY} and insert your personal API
15:     Axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`).then(
16:         (res) => setNewCurrency(res.data.conversion_rates)
17:         );
18:    }, []);
```

<h1 style="text-align: center; font-weight: bold;" id="license">
    License: MIT
</h1>
