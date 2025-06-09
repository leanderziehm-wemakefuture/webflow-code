console.log("pricing.js loaded from github :)")


/*


$(document).ready(function() {
    function updateDiscountBanner() {
        if ($(".yearly-tab").hasClass("active")) {
            $(".pricing-card").not(".no-discount").addClass('discount-banner');
        } else {
            $(".pricing-card").not(".no-discount").removeClass('discount-banner'); 
        }
    }
    
    $(".pricing-switch-tab .pricing-tab").removeClass('active');
    $(".pricing-switch-tab .yearly-tab").addClass('active');
    updateDiscountBanner();

    $(".pricing-switch-tab .pricing-tab").click(function() {
        $(".pricing-switch-tab .pricing-tab").removeClass('active');
        $(this).addClass('active');
        updateDiscountBanner(); 
    });
});


////////////////


window.saasEndpoints = [];
document.querySelectorAll('.endpoint-autocomplete-item').forEach(function(item) {
  window.saasEndpoints.push({
    name: item.getAttribute('data-name'),
    key: item.getAttribute('data-key'),
    creditsPerCall: parseFloat(item.getAttribute('data-credits')) || 0
  });
});

/// get currency of user
fetch('https://0ck-get-ip-currency.0ck.workers.dev/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched Data:\n", JSON.stringify(data, null, 2));

    if (data.chosenCurrency.toUpperCase() === 'EUR') {
      let html = document.body.innerHTML;

      // Exact replacements
      html = html.replace(/\$99\b/g, '€89.49');
      html = html.replace(/\$19\b/g, '€17.49');
      html = html.replace(/\$7\b/g, '€6.49');
      html = html.replace(/\$0\b/g, '€0');
      
       //html = html.replace(/\bUSD\b/g, '');

      // Replace "USD" with "EURO"
      html = html.replace(/\bUSD\b/g, '');

      document.body.innerHTML = html;
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });




*/