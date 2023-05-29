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

//calculate expiry date
  function calculateExpiryDate() {
    var commencementDateInput = document.getElementById("commDate");
    var expiryDateInput = document.getElementById("expiryDate");

    var commencementDate = new Date(commencementDateInput.value);
    var expiryDate = new Date(commencementDate);

    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    expiryDateInput.value = formatDate(expiryDate);
  }

  function formatDate(date) {
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth()+1 )).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + (day-1);
  }


//post api call
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();

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
       //  var constructionName = document.getElementById("constructionName").value;
         var commDate = document.getElementById("commDate").value;
         var expiryDate = document.getElementById("expiryDate").value;
         var coverPeriod = document.getElementById("coverPeriod").value;
         var sumInsured = document.getElementById("sumInsured").value;
         var location = document.getElementById("location").value;

         const data = {
                    insuredName: insuredName,
                    address:address,
                    gender:gender ,
                    birth:birth ,
                    identifyNo:identifyNo ,
                    country:country,
                    province:province,
                    dist:dist ,
                    postalCode:postalCode ,
                    mobilePhoneNo:mobilePhoneNo ,
                    typeProperty:typeProperty ,
                    //constructionName:constructionName ,
                    commDate:commDate,
                    expiryDate:expiryDate ,
                    coverPeriod:coverPeriod ,
                    sumInsured:sumInsured ,
                    location:location ,
                   
         }

         var data1 ={
            requestTime: "2023-05-28 14:30:30",
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
              "insuredType": "I",
              insuredName: insuredName,
              "identifyType": "",
              identifyNo:identifyNo ,
              mobilePhoneNo:mobilePhoneNo ,
              "email": "",
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
                    "fileName": "",
                    "filePath": ""
                }
            ]
    
            }
           }

       console.log("field data",data1)
      const requestOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
        },
        body: JSON.stringify(data1)
    }
   //console.log(requestOptions);

   

    fetch('http://124.71.70.238:8805/underwriting/open/quotation/saveH5?userCode=admin',requestOptions)
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `Submit Successfully! Quotation No: ${data.data.quotationNo}`,
                timer: 5000,
                showConfirmButton: false
              });
        //   alert("submit successfully, your quotation number is "+data.data.quotationNo);
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        });
        
}