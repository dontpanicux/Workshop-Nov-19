# Prompts: Build a win-back dashboard (Bolt.new workshop, Nov 19)

Run the prompts in order in one Bolt.new project. Replace [YOUR EMAIL] with the email you used to sign up for Resend. {braces} are filled in for each customer.

## Prompt 0: Ridgeline's website

```
Build a website for Ridgeline Coffee Roasters, a small-batch roaster that sells 12 oz bags online and at a Saturday farmers market.

- Home: a headline about coffee roasted this week, a short story about the roaster, and market hours (Saturdays, 8 am to 1 pm).
- Coffee: five coffees, each with a one-line tasting note and price: Ethiopia Guji, 12 oz ($19); Ridgeline House Blend, 12 oz ($16); Colombia Huila, 12 oz ($18); Swiss Water Decaf, 12 oz ($17); Night Shift Espresso, 2 lb ($42).
- Reserve for pickup: a form with name, email, and coffee. It saves to an orders table (name, email, item, amount, date), using the coffee's price and today's date, then says "See you Saturday. Pay at pickup." Visitors can add orders but never read them.

Style: warm and plain. Young Serif for headings, IBM Plex Sans for text, page #F4F5F1, accent #2F5D50. No gradients, stock photos, or emoji.

Do not build: payments, a cart, or logins.
```

## Prompt 1: the private dashboard (same project)

```
Add a private win-back dashboard at /dashboard. Don't link it from the site. Regulars buy 12 oz bags about every four weeks.

- Email and password sign-in, limited to [YOUR EMAIL]. The database itself must check that email on every table, now and in later changes, so another account sees nothing even if it signs up. Site visitors can still add orders but never read them.
- Use the existing orders table. Add an "Import CSV" button for a file with columns name, email, item, amount, date. Importing the same file twice adds no duplicates. Add a "Clear all orders" button.
- Start with example orders so the page isn't empty: 10 customers who order about every four weeks (7 still ordering, 3 whose last order was 7, 9, and 11 weeks ago) and 4 one-time buyers, using the site's coffees and example.com email addresses. Tag them "Example data" and remove them when I import a CSV.
- Gone quiet: customers with 2 or more orders whose last order was over 6 weeks ago, with a picker from 4 to 12 weeks. Show name, last item, weeks since last order, and total orders, most orders first.
- Repeat-customer rate: of the customers who ordered in the last 30 days, the percent who also have an order dated before those 30 days began. A customer whose only orders fall inside the period is new. Show it large with the change from the 30 days before, then the last six 30-day periods as simple bars, each worked out the same way.

Use the site's fonts and colors. No gradients, cards, or emoji.
```

Then download sample-orders.csv, sign up at /dashboard, and click Import CSV. To use your real customers later, export orders from Square, Shopify, Etsy, your booking tool, or a spreadsheet, rename the headers to name, email, item, amount, date, and import.

## Prompt 2: the Resend send button

Before pasting: sign up free at resend.com, create an API key, then in Bolt.new click the database icon, then Secrets, and add RESEND_API_KEY.

```
Add a "Send win-back email" button to each Gone quiet row, sent through Resend.

- Send from a server function using a secret named RESEND_API_KEY, which I'll add in Database > Secrets. Only [YOUR EMAIL] can use it.
- Test mode: send every email to [YOUR EMAIL] from onboarding@resend.dev, with a line saying who it would have gone to.
- Subject: "{first name}, it's been a while". Body: "Hi {first name}, it's been {weeks} weeks since your last {last item}. We just roasted a fresh batch, and I'd love to set one aside for you. Just reply to this email." Signed Ridgeline Coffee Roasters.
- Show a preview first. After sending, mark the row "Emailed" with the date. Show any error word for word.
```

Not using Resend? Two other ways work with the same dashboard: send the message from your own inbox, or export the list into the email tool you already use (Mailchimp, Klaviyo, Square, Shopify Email).

## Prompt 3: an editable, branded email

```
Make the win-back email editable and branded.

- Add an "Email template" page to the dashboard with the subject and body saved in the database, editable by me. Keep {first name}, {weeks}, and {last item} as fill-ins, listed beside the editor.
- In the preview, let me edit the subject and body for that one customer before sending.
- Send it as a branded HTML email: "Ridgeline Coffee Roasters" in a serif heading in #2F5D50, the body in a readable sans serif on white, and a footer with "Saturdays at the farmers market, 8 am to 1 pm" and a "Reserve for pickup" link to the site. Also send a plain-text version.
- Only [YOUR EMAIL] can read or change the template.
```

## Prompt 4: go live from your own domain

Before pasting: in Resend, open Domains, then Add Domain, and enter a domain you own (not a bolt.host address). Add the DNS records Resend shows where your domain lives (Bolt.new: Settings, Cloud, Custom domains, Open domain settings, Add new record). Wait for Verified, usually 10 to 20 minutes, sometimes a few hours. Then add one customer with your own email and send to them first.

```
My domain [YOURDOMAIN.COM] is verified in Resend. Add a "Test mode" switch to the dashboard, on by default. When it's off, send each email to the customer's own address from "Ridgeline Coffee Roasters <hello@[YOURDOMAIN.COM]>" with reply-to [YOUR EMAIL], and drop the test-mode line. With test mode off, the preview shows the real address and asks me to confirm before sending.

Add a footer to every email with my business address, [BUSINESS ADDRESS], and "Prefer not to hear from us? Reply and we'll stop." Add a "Don't email" toggle for each customer that the send button respects.
```

## Bonus prompts

### See who came back

```
Add a "Came back" list under Gone quiet: customers marked Emailed in the last 60 days, and whether they've ordered since. Above it, a line like "4 of 9 emailed customers came back."
```

### Catch them before they go quiet

```
Add a "Due soon" list above Gone quiet: regulars whose usual gap between orders has passed but who aren't quiet yet, with the date they'd normally order.
```

### Phone check

```
Make every screen work on a phone 375 pixels wide. Fix anything cut off, overlapping, too small to tap, or scrolling sideways. Stack Gone quiet above the repeat-customer rate.
```

## For dry runs only: standalone dashboard

Builds the dashboard in a fresh project without the site.

```
Build a private win-back dashboard for Ridgeline Coffee Roasters, where regulars buy 12 oz bags of coffee about every four weeks.

- Email and password sign-in, limited to [YOUR EMAIL]. The database itself must check that email on every table, now and in later changes, so another account sees nothing even if it signs up.
- An orders table (name, email, item, amount, date) with an "Import CSV" button for files with those columns. Importing the same file twice adds no duplicates. Add a "Clear all orders" button.
- Start with example orders so the page isn't empty: 10 customers who order about every four weeks (7 still ordering, 3 whose last order was 7, 9, and 11 weeks ago) and 4 one-time buyers, all with example.com email addresses. Tag them "Example data" and remove them when I import a CSV.
- Gone quiet: customers with 2 or more orders whose last order was over 6 weeks ago, with a picker from 4 to 12 weeks. Show name, last item, weeks since last order, and total orders, most orders first.
- Repeat-customer rate: of the customers who ordered in the last 30 days, the percent who also have an order dated before those 30 days began. A customer whose only orders fall inside the period is new. Show it large with the change from the 30 days before, then the last six 30-day periods as simple bars, each worked out the same way.

Style: calm and plain, like a ledger. Young Serif for the title, IBM Plex Sans for text, accent #2F5D50. No gradients, cards, or emoji.
```
