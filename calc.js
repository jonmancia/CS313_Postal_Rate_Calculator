module.exports = function(shippingType, weight) {
    switch (shippingType) {
        case 'metered': {
            let calc;
            if (weight < 2) {
                calc = .55;
            } else if (weight < 3) {
                calc = .70;
            } else if (weight > 3.5) {
                calc = .85;
            } else {
                calc = 1;
            }
            return String(calc);
            break;
        }
        case 'stamped': {
            let calc;
            if (weight < 2) {
                calc = .50;
            } else if (weight < 3) {
                calc = .65;
            } else if (weight > 3.5) {
                calc = .80;
            } else {
                calc = .95;
            }
            return String(calc);
            break;
        }
        case 'flats': {
            let calc;
            if (weight < 2) {
                calc = 1;
            } else if (weight < 3) {
                calc = 1.15;
            } else if (weight < 4) {
                calc = 1.30;
            } else if (weight < 5) {
                calc = 1.45;
            } else if (weight < 6) {
                calc = 1.60;
            } else if (weight < 7) {
                calc = 1.75;
            } else if (weight < 8) {
                calc = 1.90;
            } else if (weight < 9) {
                calc = 2.05;
            } else if (weight < 10) {
                calc = 2.20;
            } else if (weight < 11) {
                calc = 2.35;
            } else if (weight < 12) {
                calc = 2.50;
            } else if (weight < 13) {
                calc = 2.65;
            } else {
                calc = 2.80;
            }
            return String(calc);
            break;
        }
        case 'retail': {
            let calc;
            if (weight < 5) {
                calc = 3.66;
            } else if (weight < 9) {
                calc = 4.39;
            } else if (weight < 13) {
                calc = 5.19;
            } else {
                calc = 5.71;
            }
            return String(calc);
            break;
        }
        default:
            break;
    }
}