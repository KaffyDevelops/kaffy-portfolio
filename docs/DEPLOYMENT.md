# Deployment plan for `kaffy.thecloudforge.app`

The portfolio should be deployed as a **separate Vercel project** from the existing Cloud Forge waitlist.

## Recommended sequence

1. Create a new GitHub repository named `kaffy-portfolio` under `KaffyDevelops`.
2. Push the contents of this scaffold to that repository.
3. In Vercel, create a new project from `KaffyDevelops/kaffy-portfolio`.
4. Confirm the preview deployment before assigning a production domain.
5. Add `kaffy.thecloudforge.app` to the new Vercel project.
6. In the DNS provider for `thecloudforge.app`, create the subdomain record Vercel asks for. For an externally managed subdomain, Vercel commonly uses a CNAME target. Use the exact target shown in the Vercel project rather than copying an old CNAME from another project.
7. Verify the domain in Vercel and wait for SSL to be issued.
8. Test both desktop and mobile routes, case-study links, GitHub links and email links.

## Do not

- Do not attach `kaffy.thecloudforge.app` to the existing Cloud Forge waitlist project.
- Do not reuse the current `www.thecloudforge.app` CNAME value unless Vercel explicitly gives the same value for the portfolio project.
- Do not expose private Cloud Forge repositories or secrets.

## Pre-production checklist

- [ ] Confirm LinkedIn URL
- [ ] Add downloadable current CV
- [ ] Add professional headshot when selected
- [ ] Add verification links for certifications
- [ ] Replace any placeholder project artefacts with real screenshots/diagrams
- [ ] Confirm `10,500+` LinkedIn followers and `2,500+` newsletter subscribers are still appropriate threshold figures
- [ ] Test security headers in production
- [ ] Test accessibility and keyboard navigation
- [ ] Test 360 px, 768 px, 1024 px and 1440 px layouts
- [ ] Add privacy-conscious analytics after launch
