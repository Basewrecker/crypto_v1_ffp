<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DGWV6LJKXL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGWV6LJKXL');
</script>

const AboutPage = () => {
    return (
        <div className = "about">
            <h1>
                About Crypto Dash
            </h1>
            <p>
                Crypto Dash is a simple React application that displays live cryptocurrency data using the CoinGecko API.
            </p>
            <p>
                You can explore the top cryptocurrencies by market cap, filter by name or symbol, and sort them by price, market cap, or 24-hour change. 
                
                Project has taken heavy inspiration from Brad traversy.
            </p>
        </div>
    );
}

export default AboutPage;