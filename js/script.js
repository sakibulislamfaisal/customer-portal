var divisionData = {
  "Barisal": [
      
    { district: "Barguna", postalCode: "8700" },
    { district: "Bhola", postalCode: "8300" },
    { district: "Jhalokati", postalCode: "8400" },
    { district: "Patuakhali", postalCode: "8600" },
    { district: "Pirojpur", postalCode: "8500" },
    { district: "Barishal", postalCode: "8200" },
    // Add more districts and postal codes for Barisal division
  ],
  "Chittagong": [
    { district: "Bandarban", postalCode: "4600" },
    { district: "Brahmanbaria", postalCode: "3400" },
    { district: "Chandpur", postalCode: "3600" },
    { district: "Comilla", postalCode: "3500" },
    { district: "Cox's Bazar", postalCode: "4700" },
    { district: "Feni", postalCode: "3900" },
    { district: "Khagrachari", postalCode: "4400" },
    { district: "Lakshmipur", postalCode: "3700" },
    { district: "Noakhali", postalCode: "3800" },
    { district: "Rangamati", postalCode: "4500" },
    { district: "Chattogram", postalCode: "4000" },
    
    // Add more districts and postal codes for Chittagong division
  ],
  "Dhaka": [
   
    { district: "Faridpur", postalCode: "7800" },
    { district: "Gazipur", postalCode: "1700" },
    { district: "Gopalganj", postalCode: "8100" },
    { district: "Kishoreganj", postalCode: "2300" },
    { district: "Madaripur", postalCode: "7900" },
    { district: "Manikganj", postalCode: "1800" },
    { district: "Munshiganj", postalCode: "1500" },
    { district: "Narayanganj", postalCode: "1400" },
    { district: "Narsingdi", postalCode: "1600" },
    { district: "Rajbari", postalCode: "7700" },
    { district: "Shariatpur", postalCode: "8000" },
    { district: "Tangail", postalCode: "1900" },
    { district: "Dhaka", postalCode: "1000" },
    // Add more districts and postal codes for Dhaka division
  ],
  "Khulna": [
    { district: "Bagerhat", postalCode: "9300" },
    { district: "Chuadanga", postalCode: "7200" },
    { district: "Jessore", postalCode: "7400" },
    { district: "Jhenaidah", postalCode: "7300" },
    { district: "Khulna", postalCode: "9000" },
    { district: "Kushtia", postalCode: "7000" },
    { district: "Magura", postalCode: "7600" },
    { district: "Meherpur", postalCode: "7100" },
    { district: "Narail", postalCode: "7500" },
    { district: "Satkhira", postalCode: "9400" },
    // Add more districts and postal codes for Khulna division
  ],
  "Mymensingh": [
    { district: "Jamalpur", postalCode: "2000" },
    { district: "Mymensingh", postalCode: "2200" },
    { district: "Netrokona", postalCode: "2400" },
    { district: "Sherpur", postalCode: "2100" },
    // Add more districts and postal codes for Mymensingh division
  ],
  "Rajshahi": [
    { district: "Bogra", postalCode: "5800" },
    { district: "Chapainawabganj", postalCode: "6300" },
    { district: "Joypurhat", postalCode: "5900" },
    { district: "Naogaon", postalCode: "6500" },
    { district: "Natore", postalCode: "6400" },
    { district: "Pabna", postalCode: "6600" },
    { district: "Sirajganj", postalCode: "6700" },
    { district: "Rajshahi", postalCode: "6000" },
    // Add more districts and postal codes for Rajshahi division
  ],
  "Rangpur": [
    { district: "Dinajpur", postalCode: "5200" },
    { district: "Gaibandha", postalCode: "5700" },
    { district: "Kurigram", postalCode: "5600" },
    { district: "Lalmonirhat", postalCode: "5500" },
    { district: "Nilphamari", postalCode: "5300" },
    { district: "Panchagarh", postalCode: "5000" },
    { district: "Thakurgaon", postalCode: "5100" },
    { district: "Rangpur", postalCode: "5400" },
    // Add more districts and postal codes for Rangpur division
  ],
  "Sylhet": [
    { district: "Habiganj", postalCode: "3300" },
    { district: "Moulvibazar", postalCode: "3200" },
    { district: "Sunamganj", postalCode: "3000" },
    { district: "Sylhet", postalCode: "3100" },
   
    // Add more districts and postal codes for Sylhet division
  ]
};

// Populate the division dropdown dynamically
var divisionSelect = document.getElementById("province");
for (var division in divisionData) {
  var option = document.createElement("option");
  option.value = division;
  option.text = division;
  divisionSelect.appendChild(option);
}

function populateDistricts() {
  var divisionSelect = document.getElementById("province");
  var districtSelect = document.getElementById("dist");
  var selectedDivision = divisionSelect.value;

  // Clear the previous district options
  districtSelect.innerHTML = "";

  if (selectedDivision) {
    var districts = divisionData[selectedDivision];

    if (districts) {
      // Create new district options based on the selected division
      districts.forEach(function(district) {
        var option = document.createElement("option");
        option.value = district.district;
        option.text = district.district;
        districtSelect.appendChild(option);
      });
    }
  }
}

function populatePostalCode() {
  var districtSelect = document.getElementById("dist");
  var postalCodeInput = document.getElementById("postalCode");
  var selectedDistrict = districtSelect.value;

  if (selectedDistrict) {
    var selectedDivision = document.getElementById("province").value;
    var districts = divisionData[selectedDivision];

    if (districts) {
      var selectedDistrictData = districts.find(function(district) {
        return district.district === selectedDistrict;
      });

      if (selectedDistrictData) {
        postalCodeInput.value =   selectedDistrictData.postalCode;
      }
    }
  }
}

  //Calculate Expiry Date 
  function calculateExpiryDate() {
    var commencementDate = new Date(document.getElementById("commDate").value);
    var expiryDate = new Date(commencementDate.getFullYear() + 1,commencementDate.getMonth(),commencementDate.getDate() );
      
      document.getElementById("expiryDate").value = expiryDate.toISOString().split("T")[0];
  }




//Call Proposal Form API
      document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
  
        var insuredName = document.getElementById("insuredName").value;
        var address = document.getElementById("address").value
        var gender = document.getElementById("gender").value;
        var birth = document.getElementById("birth").value;
        var identifyNo = document.getElementById("identifyNo").value;
        var country = document.getElementById("country").value;
        var province = document.getElementById("province").value;
        var dist = document.getElementById("dist").value;
        var postalCode = document.getElementById("postalCode").value;
        var mobilePhoneNo = document.getElementById("mobilePhoneNo").value;
        var typeProperty = document.getElementById("typeProperty").value;
        var commDate = document.getElementById("commDate").value;
        var expiryDate = document.getElementById("expiryDate").value;
        var coverPeriod = document.getElementById("coverPeriod").value;
        var sumInsured = document.getElementById("sumInsured").value;
        var location = document.getElementById("location").value;
        var identifyType = document.getElementById("identifyType").value;
        var email = document.getElementById("email").value;
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const date = String(currentDate.getDate()).padStart(2, '0');
        const hour = String(currentDate.getHours()).padStart(2, '0');
        const minute = String(currentDate.getMinutes()).padStart(2, '0');
        const second = String(currentDate.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        console.log(formattedDate);

  
        const reader = new FileReader();
        reader.onloadend = function() {
          const base64Data = reader.result.split(',')[1]; // Get the base64 data (remove the prefix)
  
          var data ={
          
            requestTime: formattedDate,
            data: {
             "innerProductCode": "FIR",
             "productCode": "FIR",
             "planCode": "D",
             "planRadio": "C",
             "accountNo": "H000120C",
             commDate:commDate,
             expiryDate:expiryDate ,
             sumInsured:sumInsured ,
             coverPeriod:coverPeriod ,
             "coverPeriodFlag": "Y",
             "coinsType": "0",
             "reinsInwardInd": false,
             "renewalInd": "0",
             "previousPolicyNo": "",
             "guInsuredVo": {
              "insuredType": "",
              insuredName: insuredName,
              identifyType: identifyType,
              identifyNo:identifyNo ,
              mobilePhoneNo:mobilePhoneNo ,
              email: email,
              gender:gender ,
              birth:birth ,
              country:country,
              "countryName": "",
              postalCode:postalCode ,
              province:province,
              "provinceName": "",
              dist:dist ,
              "distName": "",
              address:address,
              "isStrategicClient": false
             },
             "guSubjectVoList": [
              {
                "subjectType": "",
			        	"riskCategory": "",
			        	"shoreInd": "",
			        	"country": "",
			        	"claimsExperience": false,
				        "claimsDesc": null,

               "guSubjectFireVo": {
                typeProperty:typeProperty ,
                location:location ,
                "constructionCode": "",
                "constructionName": ""
               }
              }
             ],
             "fileList": [
                {
                  file:base64Data,
                  fileName:file.name
                }
            ]
    
            }
           }

console.log("submit form data",data)
        
Swal.fire({
  title: 'Please wait',
  html: 'Posting data... <br/> This might take a moment.',
  allowOutsideClick: false,
  didOpen: () => {
    Swal.showLoading();
  }
});



          fetch('http://124.71.70.238:8805/underwriting/open/quotation/saveH5?userCode=admin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
          })
            .then(response => response.text())
            .then(data => {
              const jsonResponse = JSON.parse(data);
              Swal.showLoading();
              Swal.fire({
                icon: 'success',
                title: 'Success',
                html: `Quotation Create Successfully! <br> <span class="success-text"> Quotation No: ${jsonResponse.data.quotationNo}</span>`,
                timer: 10000,
                showConfirmButton: true,
                confirmButtonText: 'OK',
                customClass: {
                confirmButton: 'custom-confirm-button-class'
               }
              }); 
              // Convert response text to JSON
              console.log(jsonResponse);
              // Reset the form
              document.getElementById('myForm').reset();
            })
            .catch(error => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                timer: 3000,
                showConfirmButton: false
              });
              console.error('Error:', error);
            });
        };
  
        reader.readAsDataURL(file);
      });