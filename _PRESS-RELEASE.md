# Project Name #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## Heading ##
  > Name the product in a way the reader (i.e. your target customers) will understand.

  cardio

## Sub-Heading ##
  > Describe who the market for the product is and what benefit they get. One sentence only underneath the title.

  Professionals who would like to exchange business cards but not want to maintain a stack of physical business cards in their wallets or misplace them at home.

## Summary ##
  > Give a summary of the product and the benefit. Assume the reader will not read anything else so make this paragraph good.

  Alice will be able to snap a photo of her own business card. Upon doing so, she will be provided a unique QR code that will allow others to access her business card by scanning her QR code within a set time interval (for security reasons). This card/profile will now be stored in a DB. Alice can now edit the field of information that the application prompts her. She will be able to input the name, the company she works at, the position she holds at the company, the email, and the phone number from the card (similar to how Chase Bank allows users to verify the amount from a mobile check desposits after taking a photo). 

  > If time persists, our application would allow for image recognition of text on a business card, which would parse the business card and autopopulate this information to a profile. We,the developers, know is a difficult challenge and are not considering as MVP

  Bob meets Alice at a conference at Moscone Center, and he snaps a photo of Alice's QR code. Now, Bob has her business card in his phone with all the populated fields preentered and a pin on his personal map at Moscone Center about when and where he met Alice. 

  Months later of using the mobile app with many other people, Bob sets the smartphone to landscape and begins scrolling through a "cover flow" of business cards and reveals information about a person and where he met them. He will also be able to search for a person in vertical list view with an omnibar (similar to iOS's Music App). 

  > TL;DR of MVP
  > ..*  Save business cards to a QR Code
  > ..*  Snap QR code to store on new user's phone
  > ..*  Have a list of people's business cards
  > ..*  Determine where you networked with people on a map

## Problem ##
  > Describe the problem your product solves.

..* Figuring out where you met people. 
..* Maintaining a stack of other people's business cards you've collected
..* Distributing a physical card from a stack of your business cards

## Solution ##
  > Describe how your product elegantly solves the problem.

..* Paperless business cards
..* Normalized information from only five input fields
..* One-way connection (instead of Linkedin's two-way connection where users must send connection requestions and accepts before they are connected)
..* Records when and where you met a person, based on the location where a QR code was scanned 

## Quote from You ##
  > A quote from a spokesperson in your company.

..* This is the Snapchats of Linkedin.

## How to Get Started ##
  > Describe how easy it is to get started.

..* Download the app from the App Store and profile creation is easy. Just snap a photo of your business card and scan someone's QR code to add their info into your phone.

## Customer Quote ##
  > Provide a quote from a hypothetical customer that describes how they experienced the benefit.

..* Business cards are the new selfies.

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.

..* Follow more@cardio.xyz for additional announcements.