
function calculate() {
	var p = parseFloat($('#investmentInput').val());
	var r = parseFloat($('#interestRate').val());
	var n = parseFloat($('#years').val());
	var A = p * Math.pow(1 + r, n);
	$('#finalValues').val(Math.round(A));
	return false;
	
	}

        $('input[placeholder]').blur(function() {
            $(this).closest('.form-group').removeClass('has-error');
            $('div.error').remove();
            if ($(this).val() === '') {
                $(this).closest('.form-group').addClass('has-error');
                $(this).after("<div class='error'> This field is required</div>");
                $(this).focus();
            }
        });