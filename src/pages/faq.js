/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 1,
      question: "What does the address check show?",
      answer:
        "The overall risk (percentage) is the probability that the address is associated with illegal activity. The sources of the risk are the known services with which the address has interacted and the percentage of funds taken from these services against which the overall risk is calculated.",
    },
    {
        id: 2,
        question: "What do the parameters in the check results mean?",
        answer:
          "AMLBot checks the specified wallet address for connections to known blockchain services.<br/>AMLBot conventionally groups these services into groups with different levels of risk of illegal activity. The check shows the connections of the checked address to these groups as a percentage.<br></br>Based on all the links, an average risk score is given, which helps the user to make further decisions about the assets.",
      },{
        id: 3,
        question: "How do I understand risk assessment?",
        answer:
          `
          Each client determines for himself what percentage of risk is acceptable for him. Conventionally, the risk values can be divided as follows:<br></br>
- 0-25% is a clean wallet/transaction;<br></br>
- 25-75% is the average level of risk;<br></br>
- 75%+ is such a wallet/transaction is considered risky.<br></br>
It is also worth paying attention to the red sources of risk in the detailed analysis, described in page`,
      },{
        id: 4,
        question: "How quickly is the balance replenished?",
        answer:
          `
          After confirming the transaction, the balance is topped up:<br></br>
- Up to 10 minutes if payment occurred within 24 hours of billing,<br></br>
- Up to 25 minutes if the payment is made after 24 hours from the moment of invoice.<br></br>

In general, BTC, ETH, USDT and fiat are processed faster than other coins.`,
      },{
        id: 5,
        question: "What does the percentage risk score mean?",
        answer:
          `
          AMLBot finds links of a verified address to different users in the blockchain, each with a different conditional risk score.
          <br></br>
The overall risk score is the average of all the components found. For example, if out of 2 BTC on the wallet being checked, 1 BTC came from mining (0% risk) and another 1 BTC from Darknet (100% risk), the risk score would be 50%.`,
      },{
        id: 6,
        question: "How does AMLBot help protect against blocking?",
        answer:
          `
          By checking your counterparties' wallets before a transaction, you can reject their assets if your risk score is high. You can also check your wallet address before transferring funds to other services and save the result (take a screenshot).
          <br></br>
If the check showed that your assets had no connection with illegal activity, and the service blocked you, you can provide the saved result to confirm the purity of your assets.`,
      },{
        id: 7,
        question: "The risk is higher than 50%, but I am certain that the address is reliable. What to do?",
        answer:
          `
          The verification results are based on international databases, which are constantly updated. So an address that had 0% risk yesterday may have received or given the asset to a risky counterparty today. In this case, the risk score will change. If you want to be sure of the result and determine what the cause of the high risk is, we can do a detailed check for you. To do so, email us at info@amlbot.com`,
      },{
        id: 8,
        question: "What happens if I don't use all my checks each month?",
        answer:
          "They stay within your account, and you can use them at any time.",
      },{
        id: 9,
        question: "How often is it advised to perform the checks?",
        answer:
          "An answer to this depends on your unique risk model. The general recommendation would be to perform an AML check every time you interact with an unknown wallet or a smart contract.",
      },{
        id: 10,
        question: "What cryptocurrencies does AMLBot analyze?",
        answer:
          "AMLBot supports all major blockchains and tokens on them. We are constantly adding support for additional cryptocurrencies. You can always check the up-to-date list of supported cryptocurrencies in web dashboard or in API Documentation .",
      },{
        id: 11,
        question: "What if I will need more checks?",
        answer:
          "You can buy additional checks as needed. The number of checks is always displayed within your user information.",
      },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500" dangerouslySetInnerHTML={{__html:faq.answer}}></p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  