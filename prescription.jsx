<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glasses Prescription Tracker</title>
    <!-- Use React 16 for Recharts UMD compatibility -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.14.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.14.0/umd/react-dom.production.min.js"></script>
    <!-- PropTypes must be loaded before Recharts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.8.1/prop-types.min.js"></script>
    <!-- Try Recharts 1.7.1 for better CDN compatibility -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/recharts/1.7.1/Recharts.min.js"></script>
    <script src="theme.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="header-include"></div>
    <div id="root"></div>
    <div id="footer-include"></div>

    <script>
      // Inject header and footer outside React root
      document.addEventListener('DOMContentLoaded', function() {
        fetch('header.html').then(r => r.text()).then(t => {
          document.getElementById('header-include').innerHTML = t;
        });
        fetch('footer.html').then(r => r.text()).then(t => {
          document.getElementById('footer-include').innerHTML = t;
        });
      });
    </script>

    <script type="text/babel" data-presets="react,env">
// ...existing React code from prescription.html...
    </script>
</body>
</html>
