export default function BookList() {
   let pageTitle = "Books I Found";
   let book1 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxDYAP46NQKRCyhVQgmK0DfyzTFQ1TyW4m6UXzVfk91eqeDl4S3VdUm6eEbA-IDvPRcDJHaTNmdDZc2EapOiQ6vtU38nNGUHNhCeiw54k&usqp=CAc";
   let book2 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRv81pBAv0V1BipoUBTIa7lVcSZixXA5k_raWLo9-kR6sxhif3WmZUfTvjaECctu9PTRNWNGmcHE8fy8DLX9g3K66KRMnyc58X3x5bldbyjifJW3YZkxE&usqp=CAc";
   let book3 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpIfrBx1zhbWDHNIao-_cuPyTnZ86m39SAGm_juJhEsRLLIk9jYzd6bGOCwqJo58oKJ_fu65EBXzmSL-706_NMBv96TqykXnKTA9-EQsY&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="surrounded by idiots" />
         <img src={book2} alt="We are Okay" />
         <img src={book3} alt= "good morning, monster" />
      </div>      
   );
}