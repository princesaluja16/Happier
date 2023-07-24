import React from 'react'
import { Accordion } from './Accordion';

const Faq = () => {

    const faqs = [
        {
          "id": 1,
          "question": "Why should I use HAPPIER?",
          "answer": "Wide Range of Products: Happier offers a diverse selection of high-quality clothing and accessories for men, women, and children. From trendy fashion pieces to comfortable everyday wear, we have something for everyone."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, absolutely! Happier is designed to be mobile-responsive, which means you can easily access and browse our store on your mobile devices such as smartphones and tablets. Whether you're on the go or prefer shopping from the comfort of your mobile device, you can enjoy a seamless and optimized shopping experience on Happier's mobile version."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Yes, we offer refunds for eligible items. If you are not completely satisfied with your purchase, you can request a refund within the specified refund period. Please note that certain conditions may apply, and not all items may be eligible for a refund. "
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes, we support international payments. We understand that our customers come from different parts of the world, and we want to make the shopping experience convenient for everyone. We accept a variety of payment methods that are accessible internationally, including major credit cards, debit cards, and international payment platforms."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
    
}

export default Faq
