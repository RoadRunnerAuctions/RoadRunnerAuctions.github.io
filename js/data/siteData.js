const siteData = {
  company: {
    name: "Roadrunner Auctions",
    tagline: "Online auctions serving Albuquerque and Central New Mexico",
    locationShort: "Albuquerque, New Mexico",
    serviceArea: "Albuquerque and Central New Mexico",
    phone: "505-717-1839",
    phoneHref: "tel:5057171839",
    email: "roadrunnerauctionsnm@gmail.com",
    emailHref: "mailto:roadrunnerauctionsnm@gmail.com",
    addressLines: ["2845 Girard Blvd NE", "Albuquerque, NM 87107"],
    logo: "assets/roadrunner-logo.png",
    hibidUrl: "https://roadrunnerauctions.hibid.com/"
  },

  navigation: [
    { label: "Home", href: "#/" },
    { label: "About", href: "#/about" },
    { label: "Services", href: "#/services" },
    { label: "How It Works", href: "#/how-it-works" },
    { label: "Contact", href: "#/contact" }
  ],

  home: {
    eyebrow: "Roadrunner Auctions",
    title: "Online auctions in Albuquerque.",
    intro: [
      "Roadrunner Auctions provides online auction services for buyers and sellers throughout Albuquerque and Central New Mexico.",
      "Browse active auctions through HiBid, place bids online, and schedule local pickup for winning items."
    ],
    buttons: [
      { label: "View Current Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true, style: "primary" },
      { label: "How Bidding Works", href: "#/how-it-works", style: "secondary" }
    ],
    quickPanel: {
      title: "Looking for auction listings?",
      text: "Current auctions, lots, bidding, and invoices are handled through HiBid."
    },
    servicesIntro: {
      title: "Auction services made simple",
      text: "A clean place for bidders to find current auctions and for sellers to contact Roadrunner about consignments, estates, and local auction needs."
    },
    featureCards: [
      { title: "Buy Online", text: "Browse current auctions, register, and place bids through HiBid." },
      { title: "Sell Items", text: "Contact Roadrunner Auctions about items, collections, equipment, or estate property." },
      { title: "Local Pickup", text: "Winning bidders receive pickup details after the auction closes." }
    ],
    sellerSection: {
      title: "Selling items or handling an estate?",
      paragraphs: [
        "Roadrunner Auctions works with consignors and estate representatives who are interested in selling items through online auction.",
        "Contact Roadrunner Auctions to discuss your items and learn more about available auction services."
      ],
      boxTitle: "Selling Through Auction",
      items: ["Estate auctions", "Consignments", "Collections", "Equipment and business assets"],
      button: { label: "View Services", href: "#/services" }
    },
    mediaPreview: {
      title: "Room for real auction photos",
      text: "This section is ready for auction photos, item photos, or location photos once Roadrunner provides approved images.",
      button: { label: "Contact Roadrunner", href: "#/contact" },
      placeholders: ["Auction photos", "Item photos", "Pickup photos"]
    },
    callout: {
      title: "Ready to view current auctions?",
      text: "Auction listings and online bidding are available through Roadrunner Auctions on HiBid.",
      button: { label: "View Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true }
    }
  },

  about: {
    eyebrow: "About",
    title: "A local auction company serving Albuquerque.",
    intro: "Roadrunner Auctions provides online auction services for buyers, sellers, consignors, and estate representatives in Albuquerque and Central New Mexico.",
    sectionTitle: "What Roadrunner Auctions does",
    paragraphs: [
      "Roadrunner Auctions helps connect sellers with bidders through online auctions. Buyers can view current auctions through HiBid, while sellers can contact Roadrunner directly to discuss auction options.",
      "Roadrunner Auctions is designed to keep the main information easy to find: current auction access, bidder information, seller information, and contact details."
    ],
    highlight: {
      title: "Local and online",
      text: "Online bidding keeps auctions accessible, while pickup and seller conversations stay local to the Albuquerque area."
    },
    cards: [
      { title: "For Buyers", text: "Find auctions, register online, bid through HiBid, and follow pickup instructions after closing." },
      { title: "For Sellers", text: "Ask about selling items, collections, equipment, or estate property through auction." },
      { title: "For Estates", text: "Contact Roadrunner to discuss estate auction needs and the next steps for evaluation." }
    ],
    contentSlots: [
      { title: "Company history", text: "Add owner-approved company background here when it is provided." },
      { title: "Team or owner photo", text: "Add an approved team, owner, or location photo here." },
      { title: "Additional details", text: "Add confirmed details about Roadrunner Auctions as they become available." }
    ]
  },

  services: {
    eyebrow: "Services",
    title: "Auction services for buyers and sellers.",
    intro: "Roadrunner Auctions keeps current auctions on HiBid and provides local auction services for sellers throughout Albuquerque and Central New Mexico.",
    cards: [
      { title: "Online Auctions", text: "Auction listings, bidding, and lot information are handled through HiBid.", linkLabel: "View HiBid", href: "https://roadrunnerauctions.hibid.com/", external: true },
      { title: "Estate Auctions", text: "For families or representatives looking to sell estate items through auction.", linkLabel: "Contact Us", href: "#/contact" },
      { title: "Consignments", text: "For individuals with items, collections, or assets they are interested in selling.", linkLabel: "Ask About Selling", href: "#/contact" },
      { title: "Collections", text: "Auction options for groups of items, personal collections, and specialty property.", linkLabel: "Start a Conversation", href: "#/contact" },
      { title: "Equipment", text: "Auction support for equipment, tools, and business-related items when appropriate.", linkLabel: "Get Details", href: "#/contact" },
      { title: "Pickup Information", text: "Winning bidders receive auction-specific pickup information after the auction closes.", linkLabel: "Learn More", href: "#/how-it-works" }
    ],
    expandSection: {
      title: "Ready for more confirmed services",
      text: "Additional service cards can be added here once Roadrunner confirms the exact services they want listed."
    },
    callout: {
      title: "Have items to sell?",
      text: "Contact Roadrunner Auctions to talk through what you have and what the next step should be.",
      button: { label: "Contact Us", href: "#/contact" }
    }
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "Simple steps for bidders and sellers.",
    intro: "Use this page as the basic guide. Full auction terms and listing-specific instructions should always be reviewed on HiBid.",
    bidderTitle: "For bidders",
    sellerTitle: "For sellers",
    bidderSteps: [
      { title: "View Auctions", text: "Open the Roadrunner Auctions HiBid page and browse current listings." },
      { title: "Register", text: "Create or sign in to your bidding account through HiBid." },
      { title: "Bid Online", text: "Place bids during the auction period and watch closing times carefully." },
      { title: "Pay & Pickup", text: "Follow invoice, payment, and pickup instructions after the auction closes." }
    ],
    sellerSteps: [
      { title: "Contact", text: "Call or email Roadrunner Auctions with basic information about what you want to sell." },
      { title: "Discuss Items", text: "Share details about the items, collection, estate, or equipment." },
      { title: "Plan Auction", text: "Roadrunner can explain the next steps based on the situation." },
      { title: "Go Online", text: "Auction items can be presented to online bidders through the auction platform." }
    ]
  },


  contact: {
    eyebrow: "Contact",
    title: "Get in touch with Roadrunner Auctions.",
    intro: "Contact Roadrunner Auctions for questions about current auctions, bidding, pickup, consignments, and estate auction services.",
    sectionTitle: "Contact information",
    text: "For current auction details, use the HiBid link. For seller questions or general questions, call or email Roadrunner Auctions directly.",
    cards: [
      { title: "Phone", type: "phone" },
      { title: "Email", type: "email" },
      { title: "Location", type: "address" },
      { title: "Current Auctions", type: "hibid", text: "Browse active auctions through HiBid.", buttonLabel: "Open HiBid" }
    ]
  },

  footer: {
    quickLinks: [
      { label: "Current Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true },
      { label: "Buyer Information", href: "#/how-it-works" },
      { label: "Estate Auctions", href: "#/services" },
        { label: "Contact", href: "#/contact" }
    ]
  }
};
