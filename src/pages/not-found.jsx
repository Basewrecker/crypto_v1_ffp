<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DGWV6LJKXL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGWV6LJKXL');
</script>

import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
      <div style = {styles.container}>
          <h1 style = {styles.title}>
              404
          </h1>
          <p style = {styles.message}>
              Page not found.
          </p>
          <Link to ="/">
              Home
          </Link>
      </div>   
    
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        color: '#fff'
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px'
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px'
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }
}


export default NotFoundPage;