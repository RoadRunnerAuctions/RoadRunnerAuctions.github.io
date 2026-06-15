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
    title: "Online auctions in Albuquerque and Central New Mexico.",
    intro: [
      "Roadrunner Auctions provides online auction information and auction services for buyers and sellers throughout Albuquerque and Central New Mexico.",
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
      title: "Auction Information for Buyers and Sellers",
      text: "Buyers can browse current auctions through HiBid, while sellers can contact Roadrunner Auctions about consignments, estates, collections, equipment, and other local auction needs."
    },
    featureCards: [
      { title: "Buy Online", text: "Browse current auctions, register, and place bids through HiBid." },
      { title: "Sell Items", text: "Contact Roadrunner Auctions about items, collections, equipment, or estate property." },
      { title: "Local Pickup", text: "Winning bidders receive pickup details after the auction closes." }
    ],
    sellerSection: {
      title: "Selling items or handling an estate?",
      paragraphs: [
        "Roadrunner Auctions works with sellers, consignors, and estate representatives interested in offering items through online auction.",
        "Contact Roadrunner Auctions to discuss your items and learn more about available auction options."
      ],
      boxTitle: "Auction Selling Options",
      items: ["Estate auctions", "Consignments", "Collections", "Equipment and business assets"],
      button: { label: "View Services", href: "#/services" }
    },
    mediaPreview: {
      title: "Auction Services",
      text: "Whether you are bidding online or exploring selling opportunities, Roadrunner Auctions provides clear information for buyers and sellers.",
      button: { label: "Contact Roadrunner", href: "#/contact" },
      placeholders: ["Current Auctions", "Selling Items", "Pickup Details"]
    },
    callout: {
      title: "Ready to view current auctions?",
      text: "Current auction listings and online bidding are available through Roadrunner Auctions on HiBid.",
      button: { label: "View Auctions", href: "https://roadrunnerauctions.hibid.com/", external: true }
    }
  },

  about: {
    eyebrow: "About",
    title: "About Roadrunner Auctions.",
    intro: "Roadrunner Auctions provides online auction services for buyers, sellers, consignors, and estate representatives throughout Albuquerque and Central New Mexico.",
    sectionTitle: "Connecting buyers and sellers through online auctions",
    paragraphs: [
      "Roadrunner Auctions connects sellers with bidders through online auctions. Buyers can view current auctions through HiBid, while sellers can contact Roadrunner Auctions directly to discuss auction options.",
      "The focus is straightforward: current auction access for bidders, clear contact information for sellers, and local auction information for the Albuquerque area."
    ],
    highlight: {
      title: "Local and online",
      text: "Online bidding gives buyers access to current auctions, while pickup information and seller conversations stay connected to the Albuquerque area."
    },
    cards: [
      { title: "For Buyers", text: "Browse current auctions, register online, place bids through HiBid, and follow auction-specific pickup instructions after closing." },
      { title: "For Sellers", text: "Ask about selling items, collections, equipment, or estate property through an online auction format." },
      { title: "For Estates", text: "Contact Roadrunner Auctions to discuss estate auction needs and available next steps." }
    ],
    contentSlots: [
      { title: "Current Auctions", text: "Auction listings and online bidding are available through HiBid." },
      { title: "Buyer Information", text: "Bidders can review active listings, register online, and follow auction-specific instructions." },
      { title: "Seller Information", text: "Sellers can contact Roadrunner Auctions about items, collections, equipment, and estate property." }
    ]
  },

  services: {
    eyebrow: "Services",
    title: "Auction services and online auction information.",
    intro: "Roadrunner Auctions lists current auctions through HiBid and provides local auction services for sellers throughout Albuquerque and Central New Mexico.",
    cards: [
      { title: "Online Auctions", text: "Current auction listings, bidding, and lot information are available through HiBid.", linkLabel: "View HiBid", href: "https://roadrunnerauctions.hibid.com/", external: true },
      { title: "Estate Auctions", text: "For families or representatives interested in selling estate items through auction.", linkLabel: "Contact Us", href: "#/contact" },
      { title: "Consignments", text: "For individuals with items, collections, or assets they would like to discuss selling through auction.", linkLabel: "Ask About Selling", href: "#/contact" },
      { title: "Collections", text: "Auction options for groups of items, personal collections, and specialty property.", linkLabel: "Start a Conversation", href: "#/contact" },
      { title: "Equipment", text: "Auction options for equipment, tools, and business-related items when appropriate.", linkLabel: "Get Details", href: "#/contact" },
      { title: "Pickup Information", text: "Winning bidders receive auction-specific pickup information after the auction closes.", linkLabel: "Learn More", href: "#/how-it-works" }
    ],
    expandSection: {
      title: "More Auction Information",
      text: "Contact Roadrunner Auctions about auction needs not listed above."
    },
    callout: {
      title: "Have items to sell?",
      text: "Contact Roadrunner Auctions to discuss what you have and ask about available next steps.",
      button: { label: "Contact Us", href: "#/contact" }
    }
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How bidding and selling work.",
    intro: "Review the basic steps below. Full auction terms and listing-specific instructions should always be reviewed on HiBid.",
    bidderTitle: "For bidders",
    sellerTitle: "For sellers",
    bidderSteps: [
      { title: "View Auctions", text: "Open the Roadrunner Auctions HiBid page to browse current listings." },
      { title: "Register", text: "Create or sign in to your bidding account through HiBid." },
      { title: "Bid Online", text: "Place bids during the auction period and review closing times carefully." },
      { title: "Pay & Pickup", text: "Follow invoice, payment, and pickup instructions after the auction closes." }
    ],
    sellerSteps: [
      { title: "Contact", text: "Call or email Roadrunner Auctions with basic information about the items you would like to sell." },
      { title: "Discuss Items", text: "Share details about the items, collection, estate property, or equipment." },
      { title: "Plan Auction", text: "Roadrunner Auctions can explain available next steps based on the items and situation." },
      { title: "Go Online", text: "Auction items can be presented to online bidders through HiBid." }
    ]
  },


  contact: {
    eyebrow: "Contact",
    title: "Contact Roadrunner Auctions.",
    intro: "Contact Roadrunner Auctions with questions about current auctions, bidding, pickup, consignments, and estate auction services.",
    sectionTitle: "Contact information",
    text: "For current auction details, visit HiBid. For seller questions or general questions, call or email Roadrunner Auctions directly.",
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
