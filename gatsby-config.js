require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `RV Trans | 956-237-2658`,
    description: "RV Trans, Import, Export, Broker, Transportation, Laredo,Texas, TX",
    siteUrl: `https://www.yourdomain.tld`,
    businessInfo: {
        phoneNumber: '956-237-2658',
        businessLogo: '',
        googleAddress: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7612047994567!2d-99.4651802845195!3d27.600932082836085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866120a9e7382d09%3A0xf317e661025f05d2!2s1816%20Orange%20Blossom%20Loop%2C%20Laredo%2C%20TX%2078045!5e0!3m2!1sen!2sus!4v1655682816600!5m2!1sen!2sus',
        name: 'RV Trans',
        reviews: [
          {
            name: 'Matt B',
            message: "As long as they've handled my freight deliveries, my shipments have been picked up and delivered on time without any issue. I recommend you trust the company I'm now proud to call my permanent logistics provider.",
            title: 'Customer'
          },
          {
            name: 'Neo S',
            message: "HUA FREIGHT has easy-to-use software that makes the on-boarding process simple. Uploading documentation and insurance documents was a breeze. Their factoring company was collaborative and received payment in less than 48 hours.",
            title: 'Carrier'
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