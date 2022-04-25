package bank.online.Zealous;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BankController {
	
	@Autowired
	AccountService aserv;
	
	@Autowired
	TransactionService tserv;
	
	@PostMapping("/newacc")
	public String accountCreate(@RequestBody Account account)
	{
		Account obj=aserv.savingAccount(account);
		return obj.getAccountNumber()+" has opened for "+account.getAccountHolder();
	}

}
