require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `RV Trans`,
    description: "RV Trans, Import, Export, Broker, Transportation, Laredo,Texas, TX",
    siteUrl: `rvtrans.us`,
    businessInfo: {
        phoneNumber: '956-237-2658',
        businessLogo: '',
        address: '1816 Orange Blossom Loop Laredo, TX 78045',
        googleAddress: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7612047994567!2d-99.4651802845195!3d27.600932082836085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866120a9e7382d09%3A0xf317e661025f05d2!2s1816%20Orange%20Blossom%20Loop%2C%20Laredo%2C%20TX%2078045!5e0!3m2!1sen!2sus!4v1655682816600!5m2!1sen!2sus',
        name: 'RV Trans',
        email: 'roy@rvtrans.us',
        reviews: [
          {
            name: 'Javier Morales Jr',
            message: "Working with RV TRANS these past 2 years and still going has been a pleasure to work with, and the relationship that MAG INTERNATIONAL TRANSPORT LLC has proven growth to our company. RV has great customer service, great leadership, but above all they pay their freight bills on time as to why they have a 100 credit score on DAT load board, that is why moving freight for them is always welcomed. Thank you Mr. Roy Velasquez for being a valued customer.",
            title: 'Terminal Manager',
            company: 'MAG INTERNATIONAL TRANSPORT LLC'
          },
          {
            name: 'Esther Oviedo',
            message: "For the past 3 years we have been working with RV TRANS without any incidents or issues. The Customer Service is excellent. The loads are fairly priced and always paid on time. Their dispatching hours are 24/7, always kind and approachable which in this kind of Industry is definitely a plus.",
            title: null,
            company: 'Imperio Transport, Inc.'
          },
          {
            name: 'Lisa E',
            message: "I ship fragile and time-sensitive products to distributors around the county. These guys always make sure my goods reach their destination on time, and I haven't had a single damage claim yet. I wouldn't trust my shipments with anyone else now that I've experienced the best.",
            title: 'Owner/Operator'
          }
        ]
    }
  },
  plugins: ["gatsby-plugin-netlify-cms", 
  "gatsby-plugin-mdx", 
  "gatsby-transformer-remark", 
  "gatsby-plugin-recaptcha", 
  "gatsby-plugin-netlify", 
  "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};