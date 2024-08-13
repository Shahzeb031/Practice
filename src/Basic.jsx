import React from 'react';
 import { Formik } from 'formik';

 const Basic = () => (
   <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{Email: '', Password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
         errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <div className="flex items-center justify-center h-screen">
         <form className="flex flex-col gap-4 border border-black-1000 rounded px-10 " onSubmit={handleSubmit}>
          
              <div className="flex flex-col">
              <label>Email:</label>
           <input
            placeholder="type your email..."
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
            </div>
           {errors.email && touched.email && errors.email}

           <div className="flex flex-col">
              <label>Name:</label>
           <input
            placeholder="type your name..."
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
             </div>
           {errors.name && touched.name && errors.name}
          
              <div className="flex flex-col">
              <label>Password:</label>
           <input
            placeholder="type your password..."
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
             </div>
           {errors.password && touched.password && errors.password}


           <div className="flex flex-col">
              <label>Age:</label>
           <input
            placeholder="enter your age..."
             type="numbers"
             name="Age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Age}
           />
             </div>
           {errors.Age && touched.Age && errors.Age}
     
           <button className=" background-color black border border-black-1000 gap-3 rounded px-5 py-3 flex items-center justify-center" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       </div>
     )
  }
   </Formik>
    </div>
 );

 export default Basic;