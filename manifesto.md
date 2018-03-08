# What is the idea?

SimpleSign https://github.com/digplan/simplesign

SimpleSign is a cross-platform technology that enables non-technical people, machines, and IOT devices anywhere in the world to easily prove identity, sign and verify any digital file, authenticate without passwords, and send encrypted information.

We are not inventing new cryptography.  Outstanding cryptography already exists.  But, its too difficult to use for the non-technical person.  SS leverages existing proven cryptographic methods, in a way that makes it very easy for anyone to use.

SimpleSign is EASILY integrated or embedded in any type of application including webapps, mobile, machine-to-machine, and IOT/Embedded.

Someone can message using PGP, but they need large key files and special software.  Encrypted apps each have their own special needs. It's too technical for most humans.

With SimpleSign, a person, group, or machine may have several 'identities'.  
Each identity is as simple as this:

Public:   e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
Private:  cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce

SimpleSign is fully compatible with existing ECDSA public/private key pairs. 
For instance, a BITCOIN address can be used by SimpleSign as an identity:

Public: 14Su6eXefCy6gjhufLKnM9FiCnzZF4kggM
Private: 5JreE9kFMpPscrNHuSSrUvtEBN6Vd1ab9GcwhvMXWn9hxPFpko4

SimpleSign identities are very short, so are easily understood and transferred, but an identity has all the power of public/private key cryptography. 

- You can use a private key to authenticate to a web service or application
- You can use a private key to sign a message and have the world validate the signature
- You can use a public key to send encrypted messages that only the recipient can decode
- You can use identities for machine to machine authentication

SimpleSign brings the full power of cryptography: authentication, private communication, digital signing, etc.. in the easiest to use package ever.

# What are the goals

SimpleSign by Digital Planets is part of an effort to bring the full power of cryptography to bear to strengthen privacy and authentication, in technologies that are easy to use for non-technical people.

A core principle of the effort is to reduce the need for shared secrets.
The widespread sharing of ANY passwords, private keys, and personal information with ANYONE is dangerous.  

Let's look at a couple of examples of what happens when you share your personal information. 

- This has resulted in EVERY password leak, since websites/providers are STORING your personal password
- This has caused EVERY Bitcoin and Crypto exchange calamity, when the exchange held everyone's private keys without appropriate security

Compounding the problem with shared secrets is, they are usually concentrated (ie.. user database), so a breach compromises the entire system.  Public key cryptography has already solved this problem.

Very simply, a personal private key is NEVER shared with anyone.  But the public key may be shared with everyone.

Eliminating shared secrets removes an entire set of internet vulnerabilities.

# How will it be done

Funding SimpleSign will bring to the public an OPEN SOURCE standard that will be the easiest to implement and easiest to adopt private/public key encryption ever created.

100% of the funds will be used to fund development to an ALPHA stage, and bring the project to the public eye to the extent that afterwards, free open-source development can be obtained, and potentially further corporate or public sponsorship. That will bring the software to the BETA stage.

We expect 4 months to get to ALPHA, and an additional 6 months to get to BETA.

No funding will be used for administrative purposes, for instance, rent, hardware, cloud services, SAAS, etc.. 

SimpleSign is a project of Digital Planets, an organization that builds future Internet technologies, and is founded by a 25 year veteran in software development and private sector implementation.

# Who is this for?

This project is for the non-technical people in the world, who make up the vast majority of Internet users.  Crypto technologies already exist to solve all the problems of privacy, security, and identity - and they are too difficult to use.   

The existing landscape of privacy, security, and identity on the global internet is dangerous and getting worse.  

For instance, we are very close to the point where fake videos can be created depicting anything, and will be impossible to tell from real video.  

Don't we desperately need digital signing mechanisms that are easily adopted, to ensure videos are produced by who they say they are?   Technologies must be EASY to adopt and implement.

# What community exists?

The project is freely available on GitHub at https://github.com/digplan/simplesign
This project will be promoted and an outreach effort will be made to developers, influencers, and industry contacts once we get closer to ALPHA release.

# Why is this needed?

The landscape of the Internet has evolved to the point where the vast majority of users are non-technical people.  People's lives now DEPEND on the Internet, and the magnitude is even still increasing.  This is a multi-decade trend.  The internet explosion was only possible because the protocols were somewhat simple (and text based).  But, the core internet technologies such as HTTP, DNS, etc.. also are too insecure by nature, in a world where organizations and governments are activly involved in weaponizing the Internet.  

There are many efforts to invent and evolve new technologies, but evolving existing technologies, such as PGP (for email encryption), is problematic, because too often they are too technical to implement and use.

# Similar efforts

The cryptocurrency efforts are seeking to bring safe and trustless money to the Internet.  Major companies are working on both proprietary and universal standards to address security and privacy issues, but often addressing more specific use cases. 

But, recent history has shown us that universal standards (SAML, XML, etc..) have been complicated and difficult to implement, and technologies that are difficult to implement WILL NOT be widely adopted, or must be revised later to simplify them, because of the cost and difficulty of implementing them.  Take OAuth for instance.  OAuth version 1 was easy to understand and implement.  The OAuth 2 spec is 75 pages.  Take for instance, 3rd party Twitter apps.  Many were discontinued when Twitter stopped support for Oauth1, because of the difficulty in implementing OAuth 2.  SimpleSign, or an equivilant 

SimpleSign is a foundational Internet technology that is not competitive with these, but may augment them.  SimpleSign is also unique because it is less-engineered, and easily compatible with other privacy/protection technologies.

# Other information
