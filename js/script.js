
var countryData = [
    'Select Country',
    'Bangladesh'
];

var divisionData = [
    'Select Division',
    'Barisal',
    'Chittagong',
    'Dhaka',
    'Khulna',
    'Mymensingh',
    'Rajshahi',
    'Rangpur',
    'Sylhet'
];

var districtData = {
    'Select Division': ['Select District'],
    'Barisal': [
        'Barisal',
        'Barguna',
        'Bhola',
        'Jhalokati',
        'Patuakhali',
        'Pirojpur'
    ],
    'Chittagong': [
        'Chittagong',
        'Bandarban',
        'Brahmanbaria',
        'Chandpur',
        'Comilla',
        "Cox's Bazar",
        'Feni',
        'Khagrachhari',
        'Lakshmipur',
        'Noakhali',
        'Rangamati'
    ],
    'Dhaka': [
        'Dhaka',
        'Faridpur',
        'Gazipur',
        'Gopalganj',
        'Kishoreganj',
        'Madaripur',
        'Manikganj',
        'Munshiganj',
        'Narayanganj',
        'Narsingdi',
        'Rajbari',
        'Shariatpur',
        'Tangail'
    ],
    'Khulna': [
        'Khulna',
        'Bagerhat',
        'Chuadanga',
        'Jessore',
        'Jhenaidah',
        'Kushtia',
        'Magura',
        'Meherpur',
        'Narail',
        'Satkhira'
    ],
    'Mymensingh': [
        'Mymensingh',
        'Jamalpur',
        'Netrokona',
        'Sherpur'
    ],
    'Rajshahi': [
        'Rajshahi',
        'Bogra',
        'Chapainawabganj',
        'Joypurhat',
        'Naogaon',
        'Natore',
        'Pabna',
        'Sirajganj'
    ],
    'Rangpur': [
        'Rangpur',
        'Dinajpur',
        'Gaibandha',
        'Kurigram',
        'Lalmonirhat',
        'Nilphamari',
        'Panchagarh',
        'Thakurgaon'
    ],
    'Sylhet': [
        'Sylhet',
        'Habiganj',
        'Moulvibazar',
        'Sunamganj'
    ]
};

var postalCodeData = {
    'Select Division': {
        'Select District': [
            'Select Postal Code'
        ]
    },
    'Barisal': {
        'Barisal': [
            '8200',
            '8201',
            '8202',
            // Add more postal codes here...
        ],
        'Barguna': [
            '8700',
            '8701',
            '8702',
            // Add more postal codes here...
        ],
        'Bhola': [
            '8300',
            '8301',
            '8302',
            // Add more postal codes here...
        ],
        'Jhalokati': [
            '8400',
            '8401',
            '8402',
            // Add more postal codes here...
        ],
        'Patuakhali': [
            '8600',
            '8601',
            '8602',
            // Add more postal codes here...
        ],
        'Pirojpur': [
            '8500',
            '8501',
            '8502',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Chittagong': {
        'Chittagong': [
            '4000',
            '4001',
            '4002',
            // Add more postal codes here...
        ],
        'Bandarban': [
            '4600',
            '4601',
            '4602',
            // Add more postal codes here...
        ],
        'Brahmanbaria': [
            '3400',
            '3401',
            '3402',
            // Add more postal codes here...
        ],
        'Chandpur': [
            '3600',
            '3601',
            '3602',
            // Add more postal codes here...
        ],
        'Comilla': [
            '3500',
            '3501',
            '3502',
            // Add more postal codes here...
        ],
        "Cox's Bazar": [
            '4700',
            '4701',
            '4702',
            // Add more postal codes here...
        ],
        'Feni': [
            '3900',
            '3901',
            '3902',
            // Add more postal codes here...
        ],
        'Khagrachhari': [
            '4400',
            '4401',
            '4402',
            // Add more postal codes here...
        ],
        'Lakshmipur': [
            '3700',
            '3701',
            '3702',
            // Add more postal codes here...
        ],
        'Noakhali': [
            '3800',
            '3801',
            '3802',
            // Add more postal codes here...
        ],
        'Rangamati': [
            '4500',
            '4501',
            '4502',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Dhaka': {
        'Dhaka': [
            '1000',
            '1001',
            '1002',
            // Add more postal codes here...
        ],
        'Faridpur': [
            '7800',
            '7801',
            '7802',
            // Add more postal codes here...
        ],
        'Gazipur': [
            '1700',
            '1701',
            '1702',
            // Add more postal codes here...
        ],
        'Gopalganj': [
            '8100',
            '8101',
            '8102',
            // Add more postal codes here...
        ],
        'Kishoreganj': [
            '2300',
            '2301',
            '2302',
            // Add more postal codes here...
        ],
        'Madaripur': [
            '7900',
            '7901',
            '7902',
            // Add more postal codes here...
        ],
        'Manikganj': [
            '1800',
            '1801',
            '1802',
            // Add more postal codes here...
        ],
        'Munshiganj': [
            '1500',
            '1501',
            '1502',
            // Add more postal codes here...
        ],
        'Narayanganj': [
            '1400',
            '1401',
            '1402',
            // Add more postal codes here...
        ],
        'Narsingdi': [
            '1600',
            '1601',
            '1602',
            // Add more postal codes here...
        ],
        'Rajbari': [
            '7700',
            '7701',
            '7702',
            // Add more postal codes here...
        ],
        'Shariatpur': [
            '8000',
            '8001',
            '8002',
            // Add more postal codes here...
        ],
        'Tangail': [
            '1900',
            '1901',
            '1902',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Khulna': {
        'Khulna': [
            '9000',
            '9001',
            '9002',
            // Add more postal codes here...
        ],
        'Bagerhat': [
            '9300',
            '9301',
            '9302',
            // Add more postal codes here...
        ],
        'Chuadanga': [
            '7200',
            '7201',
            '7202',
            // Add more postal codes here...
        ],
        'Jessore': [
            '7400',
            '7401',
            '7402',
            // Add more postal codes here...
        ],
        'Jhenaidah': [
            '7300',
            '7301',
            '7302',
            // Add more postal codes here...
        ],
        'Kushtia': [
            '7000',
            '7001',
            '7002',
            // Add more postal codes here...
        ],
        'Magura': [
            '7600',
            '7601',
            '7602',
            // Add more postal codes here...
        ],
        'Meherpur': [
            '7100',
            '7101',
            '7102',
            // Add more postal codes here...
        ],
        'Narail': [
            '7500',
            '7501',
            '7502',
            // Add more postal codes here...
        ],
        'Satkhira': [
            '9400',
            '9401',
            '9402',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Mymensingh': {
        'Mymensingh': [
            '2200',
            '2201',
            '2202',
            // Add more postal codes here...
        ],
        'Jamalpur': [
            '2000',
            '2001',
            '2002',
            // Add more postal codes here...
        ],
        'Netrokona': [
            '2400',
            '2401',
            '2402',
            // Add more postal codes here...
        ],
        'Sherpur': [
            '2100',
            '2101',
            '2102',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Rajshahi': {
        'Rajshahi': [
            '6000',
            '6001',
            '6002',
            // Add more postal codes here...
        ],
        'Bogra': [
            '5800',
            '5801',
            '5802',
            // Add more postal codes here...
        ],
        'Chapainawabganj': [
            '6300',
            '6301',
            '6302',
            // Add more postal codes here...
        ],
        'Joypurhat': [
            '5900',
            '5901',
            '5902',
            // Add more postal codes here...
        ],
        'Naogaon': [
            '6500',
            '6501',
            '6502',
            // Add more postal codes here...
        ],
        'Natore': [
            '6400',
            '6401',
            '6402',
            // Add more postal codes here...
        ],
        'Pabna': [
            '6600',
            '6601',
            '6602',
            // Add more postal codes here...
        ],
        'Sirajganj': [
            '6700',
            '6701',
            '6702',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Rangpur': {
        'Rangpur': [
            '5400',
            '5401',
            '5402',
            // Add more postal codes here...
        ],
        'Dinajpur': [
            '5200',
            '5201',
            '5202',
            // Add more postal codes here...
        ],
        'Gaibandha': [
            '5700',
            '5701',
            '5702',
            // Add more postal codes here...
        ],
        'Kurigram': [
            '5600',
            '5601',
            '5602',
            // Add more postal codes here...
        ],
        'Lalmonirhat': [
            '5500',
            '5501',
            '5502',
            // Add more postal codes here...
        ],
        'Nilphamari': [
            '5300',
            '5301',
            '5302',
            // Add more postal codes here...
        ],
        'Panchagarh': [
            '5000',
            '5001',
            '5002',
            // Add more postal codes here...
        ],
        'Thakurgaon': [
            '5100',
            '5101',
            '5102',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    },
    'Sylhet': {
        'Sylhet': [
            '3100',
            '3101',
            '3102',
            // Add more postal codes here...
        ],
        'Habiganj': [
            '3300',
            '3301',
            '3302',
            // Add more postal codes here...
        ],
        'Moulvibazar': [
            '3200',
            '3201',
            '3202',
            // Add more postal codes here...
        ],
        'Sunamganj': [
            '3000',
            '3001',
            '3002',
            // Add more postal codes here...
        ]
        // Add more districts and postal codes here...
    }
};

$(document).ready(function() {
  //  var countrySelect = $('#country');
    var divisionSelect = $('#division');
    var districtSelect = $('#district');
    var postalCodeInput = $('#postal-code');

    // Populate country dropdown
    // $.each(countryData, function(index, country) {
    //     countrySelect.append($('<option></option>').text(country));
    // });

    // Populate division dropdown
    $.each(divisionData, function(index, division) {
        divisionSelect.append($('<option></option>').text(division));
    });

    // Populate district dropdown based on the selected division
    divisionSelect.on('change', function() {
        var selectedDivision = $(this).val();
        var districts = districtData[selectedDivision];
        districtSelect.empty();
        districtSelect.append($('<option></option>').text('Select District'));
        $.each(districts, function(index, district) {
            districtSelect.append($('<option></option>').text(district));
        });
        postalCodeInput.val('');
    });

    // Populate postal code based on the selected district
    districtSelect.on('change', function() {
        var selectedDivision = divisionSelect.val();
        var selectedDistrict = $(this).val();
        var postalCodes = postalCodeData[selectedDivision][selectedDistrict];
        postalCodeInput.val(postalCodes[0]);
    });

    // Set selected values when page is reloaded
   // var selectedCountry = sessionStorage.getItem('selectedCountry');
    var selectedDivision = sessionStorage.getItem('selectedDivision');
    var selectedDistrict = sessionStorage.getItem('selectedDistrict');

    if (selectedCountry) {
       // countrySelect.val(selectedCountry);
        divisionSelect.empty();
        divisionSelect.append($('<option></option>').text('Select Division'));
        districtSelect.empty();
        districtSelect.append($('<option></option>').text('Select District'));
        postalCodeInput.val('');
        if (selectedDivision) {
            var divisions = districtData[selectedCountry];
            $.each(divisions, function(index, division) {
                divisionSelect.append($('<option></option>').text(division));
            });
            divisionSelect.val(selectedDivision);   
            if (selectedDistrict) {
                var districts = postalCodeData[selectedCountry][selectedDivision];
                $.each(districts, function(index, district) {
                    districtSelect.append($('<option></option>').text(district));
                });
                districtSelect.val(selectedDistrict);
                var postalCodes = postalCodeData[selectedCountry][selectedDivision][selectedDistrict];
                postalCodeInput.val(postalCodes[0]);
            }
        }
    }

    // Save selected values to session storage
    countrySelect.on('change', function() {
      //  var selectedCountry = $(this).val();
        var selectedDivision = divisionSelect.val();
        var selectedDistrict = districtSelect.val();
      //  sessionStorage.setItem('selectedCountry', selectedCountry);
        sessionStorage.setItem('selectedDivision', selectedDivision);
        sessionStorage.setItem('selectedDistrict', selectedDistrict);
    });
});


//update expiry date
function updateExpiryDate() {
    var startDate = document.getElementById('commencement-date').value;
    var policyDuration = document.getElementById('cover-period').value;

    var start = new Date(startDate);
    var expiry = new Date(start.getTime());

    expiry.setFullYear(expiry.getFullYear() + parseInt(policyDuration));

    var expiryYear = expiry.getFullYear();
    var expiryMonth = (expiry.getMonth() + 1).toString().padStart(2, '0');
    var expiryDay = expiry.getDate().toString().padStart(2, '0');
    var expiryFormatted = expiryYear + '-' + expiryMonth + '-' + expiryDay;

    document.getElementById('expiry-date').value = expiryFormatted;
  }

  // Set default start date to today
  var today = new Date();
  var todayFormatted = today.toISOString().split('T')[0];
  document.getElementById('commencement-date').value = todayFormatted;

  // Initialize expiry date based on default start date and duration
  updateExpiryDate();