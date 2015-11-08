# LexCMS

LexCMS (Light Extendable Content Managment System) is a work in progresss that attempts to create a CMS that follows a few simple ideals (very experimental, they could be very wrong :-) ):

1. Code should stay in the _Code Base_, where it belongs. No more development headaches caused by people cleverly stashing critical code in a database.
2. No more rolling out upgrades. Automatic code updates will pull in the most recent system and module code at which point patches for custom content will be applied as necessary when the pull is finished.

### This presents some challenges
1. The automatic code updates make for a utopian-like dream of never having to go through "upgrades" or "hotfixes," but this model often leads to an inherently unstable product if not implemented correctly. So, in light of this: care needs to be taken to ensure a stable and scaleable eco-system.
2. Well... It's a freakin CMS, so yea... There's that. Lotta infastructure to finalize and build correctly.

### Tech stack
1. Node JS/MongoDB/Express JS core technologies
2. Dust JS for templating
3. CMS area will be written in Angular JS on the client-side for a smooth and seamless editing experience.
4. Passport JS for authentication and session management.
