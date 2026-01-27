import { useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Blog Page Component
 * Displays blog articles and individual article pages
 * Design: DM Sans typography with orange accents
 */

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

const blogArticles: BlogArticle[] = [
  {
    id: "dpf-signs",
    title: "5 Signs Your DPF Needs a Professional Clean",
    excerpt:
      "Learn the warning signs that indicate your diesel particulate filter needs immediate attention. Early detection can save you thousands in repair costs.",
    author: "Robby - Dodgy Garage",
    date: "January 22, 2026",
    readTime: "6 min read",
    category: "DPF Maintenance",
    image: "🚗",
    content: `
# 5 Signs Your DPF Needs a Professional Clean

Your diesel engine's Diesel Particulate Filter (DPF) is a crucial component that traps harmful soot and ash particles before they're released into the atmosphere. However, when it becomes clogged, it can cause serious problems for your vehicle. Here are five unmistakable signs that your DPF needs professional cleaning.

## 1. The DPF Warning Light Appears on Your Dashboard

This is the most obvious sign. When your DPF warning light illuminates, it means your vehicle's onboard diagnostics system has detected that the filter is clogged or operating inefficiently. This light typically looks like a small engine with a cloud of soot beneath it.

What it means: Your filter has reached a saturation point and needs immediate attention. Ignoring this warning can lead to:
- Reduced engine performance
- Increased fuel consumption
- Potential engine damage
- Failed MOT tests

What to do: Contact us immediately. We can diagnose the issue and clean your DPF in about an hour, often for just £245.

## 2. Your Engine Performance Drops Noticeably

Have you noticed your vehicle feels sluggish or underpowered? A clogged DPF restricts exhaust flow, which means your engine has to work harder to push exhaust gases through the filter. This results in:

- Loss of acceleration power
- Difficulty climbing hills
- General sluggishness during normal driving
- Reduced maximum speed

This is particularly noticeable when towing, carrying heavy loads, or driving uphill. If your once-responsive diesel suddenly feels like it's struggling, a clogged DPF is often the culprit.

## 3. Your Fuel Consumption Increases Dramatically

Is your fuel gauge dropping faster than usual? A blocked DPF forces your engine to work much harder to expel exhaust gases. This increased strain means:

- Your engine burns more fuel to maintain the same power output
- You'll notice a significant increase in fuel costs
- Your MPG figures will drop noticeably
- You'll be visiting the petrol station more frequently

If you've noticed your fuel consumption has increased by 10-20% or more, and there's no other obvious cause, a clogged DPF is a strong possibility.

## 4. You Notice Excessive Smoke from the Exhaust

Black or grey smoke pouring from your exhaust is a red flag. A severely clogged DPF can cause:

- Black smoke (unburned fuel)
- Grey or white smoke (oil burning)
- Visible soot particles in the exhaust
- A distinctive burnt smell

This indicates that your filter is so clogged that it's affecting the combustion process itself. This is a serious problem that requires immediate attention, as continued driving can damage your engine.

## 5. Your Vehicle Goes into Limp Mode

Limp mode is your vehicle's emergency protection system. When your engine detects critical problems, it reduces power output to prevent damage. Signs include:

- Severely reduced engine power
- Unable to accelerate properly
- Engine temperature warning lights
- Possible "Check Engine" or "Service Required" messages
- Difficulty starting the vehicle

If your vehicle enters limp mode, it's a sign that your DPF problem has become severe. You should not continue driving long distances. Contact us for immediate assistance.

## Why Professional Cleaning is Better Than Replacement

Many garages will simply replace your DPF, costing £2,500-£4,000 or more. However, professional cleaning is:

- Much more affordable - Just £245 instead of £2,500+
- Environmentally friendly - Reusing your existing filter instead of replacing it
- Faster - Usually completed in about an hour
- Effective - Our cleaning process removes all accumulated soot and ash
- Long-lasting - Your cleaned filter will perform like new

## How to Prevent DPF Problems

While professional cleaning is effective, prevention is always better:

1. Take regular long drives - DPFs regenerate naturally at highway speeds. Short urban journeys don't allow proper regeneration.
2. Use quality fuel - Better fuel quality means less soot buildup.
3. Maintain your engine - Regular servicing keeps your engine running efficiently.
4. Avoid excessive idling - Idling doesn't help your DPF regenerate.
5. Monitor your dashboard - Act quickly if warning lights appear.

## What to Do If You Notice These Signs

If you've noticed any of these five signs, don't delay. A clogged DPF won't fix itself, and the longer you wait, the more damage it can cause to your engine.

Contact Dodgy Garage today:
- Call: 07983 361554
- WhatsApp: Message us directly
- Email: Use our contact form

We'll diagnose your DPF problem and have you back on the road in about an hour, often for just £245. We come to you—no need to drop your car off at a garage.

## Conclusion

Your DPF is a critical part of your diesel engine's emissions system. Recognizing the signs of a clogged filter and acting quickly can save you thousands in repair costs and prevent serious engine damage. If you've noticed any of these five signs, don't hesitate to get in touch with our expert team.

Remember: Early detection and professional cleaning is always better than expensive replacement.

---

*Have questions about your DPF? Check out our FAQ section or subscribe to our YouTube channel for more expert tips on diesel engine maintenance.*
    `,
  },
  {
    id: "adblue-faults",
    title: "Understanding and Fixing Common AdBlue Faults",
    excerpt:
      "AdBlue issues can be frustrating and expensive. Learn about common faults, what they mean, and how Dodgy Garage can fix them quickly and affordably.",
    author: "Robby - Dodgy Garage",
    date: "January 22, 2026",
    readTime: "7 min read",
    category: "AdBlue Diagnostics",
    image: "⚙️",
    content: `
# Understanding and Fixing Common AdBlue Faults

AdBlue is a crucial component of modern diesel engines, designed to reduce harmful nitrogen oxide emissions. However, when AdBlue systems malfunction, they can cause serious problems and expensive repair bills. In this guide, we'll explain common AdBlue faults, what causes them, and how Dodgy Garage can fix them quickly and affordably.

## What is AdBlue and Why Does It Matter?

AdBlue is a clear, non-toxic liquid made from urea and deionized water. It's injected into your diesel engine's exhaust system to convert harmful nitrogen oxides (NOx) into harmless nitrogen and water vapor. This system is mandatory on all Euro 5 and Euro 6 diesel vehicles (2009 onwards).

When your AdBlue system works correctly, you'll never notice it. But when it fails, you'll definitely know about it.

## Common AdBlue Faults Explained

### 1. AdBlue Low Warning Light

What it means: Your vehicle is running low on AdBlue fluid.

Why it happens:
- You haven't refilled your AdBlue tank
- The system has a slow leak
- The sensor is malfunctioning

What to do:
- Refill your AdBlue at any petrol station or supermarket
- If the warning persists after refilling, you may have a leak or sensor fault
- Contact us for diagnostics and repair

### 2. AdBlue Quality Fault

What it means: Your vehicle has detected that the AdBlue quality is poor or contaminated.

Why it happens:
- You've used non-genuine AdBlue
- The AdBlue has been contaminated with water or dirt
- The tank or lines are corroded
- The heating system isn't working properly

What to do:
- Drain and flush the AdBlue system
- Refill with genuine, high-quality AdBlue
- Replace any damaged components
- This typically costs £150-£300 at Dodgy Garage

### 3. AdBlue Heater Fault

What it means: The system that heats your AdBlue isn't working.

Why it happens:
- The heater element has failed
- Electrical connections are loose or corroded
- The control module is faulty
- Cold weather has exposed a weak component

What to do:
- Have the heating system diagnosed
- Replace the faulty heater element
- Check electrical connections
- We can diagnose and fix this in about 1-2 hours

### 4. AdBlue Pump Fault

What it means: The pump that delivers AdBlue to your engine isn't working.

Why it happens:
- The pump has seized or failed
- Contaminated AdBlue has damaged the pump
- Electrical issues with the pump motor
- The fuel filter is blocked

What to do:
- Have the pump tested and diagnosed
- Replace the pump if necessary
- Flush the system to remove contamination
- This is a more complex repair that may take 2-3 hours

### 5. AdBlue Injector Fault

What it means: The injector that sprays AdBlue into your exhaust isn't working properly.

Why it happens:
- The injector nozzle is clogged with crystallized AdBlue
- The injector has failed electrically
- Poor quality AdBlue has damaged the injector
- Corrosion in the system

What to do:
- Clean or replace the injector
- Flush the entire AdBlue system
- Use only genuine AdBlue going forward
- Cost: £250-£500 depending on the issue

### 6. AdBlue Tank Level Sensor Fault

What it means: The sensor that measures your AdBlue level isn't reading correctly.

Why it happens:
- The sensor has failed
- Electrical connections are corroded
- The sensor has been damaged by contamination
- Water has entered the sensor

What to do:
- Replace the faulty sensor
- Check for water or contamination in the tank
- Clean electrical connections
- This is usually a quick 30-minute fix

## Why You Shouldn't Ignore AdBlue Faults

Ignoring AdBlue warning lights can lead to serious consequences:

- Engine shutdown - Your vehicle may refuse to start or shut down while driving
- Limp mode - Severely reduced power output
- Failed MOT - Your vehicle won't pass emissions testing
- Expensive repairs - Small faults become major problems
- Safety issues - Unexpected engine shutdown while driving

## Why Choose Dodgy Garage for AdBlue Repairs?

### Affordable Diagnostics

We charge just £50 for a full AdBlue system diagnostic, which includes:
- System pressure testing
- Fluid quality analysis
- Electrical connection checks
- Sensor testing

If you proceed with repairs, we'll credit the diagnostic fee against your repair bill.

### Expert Technicians

Our team has years of experience with AdBlue systems across all major diesel vehicle brands:
- Ford
- Volkswagen
- BMW
- Mercedes
- Audi
- Vauxhall
- And many more

### Mobile Service

We come to you, so you don't need to:
- Take time off work
- Arrange transportation
- Pay for towing
- Sit in a garage waiting room

### Genuine Parts

We use only genuine, high-quality AdBlue and replacement parts to ensure your system works perfectly.

## Prevention Tips

Keep your AdBlue system healthy:

1. Use genuine AdBlue - Always buy from reputable sources
2. Keep your tank topped up - Don't let it run completely empty
3. Maintain your vehicle - Regular servicing prevents many issues
4. Avoid extreme temperatures - Park in shade when possible
5. Check for leaks - Look for blue stains under your vehicle
6. Use quality fuel - Better fuel means cleaner combustion and less AdBlue consumption

## What to Do If You Have an AdBlue Fault

If your vehicle is showing an AdBlue warning light or fault message:

Step 1: Don't Panic
AdBlue faults are usually fixable and won't leave you stranded.

Step 2: Contact Us
- Call: 07983 361554
- WhatsApp: Message us with your vehicle details
- Email: Use our contact form

Step 3: Get Diagnosed
We'll come to you and diagnose the problem. Most diagnostics take 30-60 minutes.

Step 4: Get Fixed
Once we know what's wrong, we'll give you a fixed quote and get you back on the road as quickly as possible.

## Conclusion

AdBlue faults don't have to be expensive or inconvenient. With Dodgy Garage, you get expert diagnostics, affordable repairs, and mobile service that comes to you. Don't let an AdBlue warning light ruin your day—contact us today and we'll have you sorted.

Ready to fix your AdBlue fault?
- Call: 07983 361554
- WhatsApp: Message us directly
- Email: Use our contact form

We're here to help, and we'll get you back on the road quickly and affordably.

---

*Have more questions about AdBlue or diesel engine maintenance? Check out our FAQ section or subscribe to our YouTube channel for more expert tips.*
    `,
  },
  {
    id: "egr-cooler-problems",
    title: "EGR Cooler Problems: Symptoms, Causes, and Solutions",
    excerpt:
      "EGR cooler failures can cause serious engine problems and expensive repairs. Learn the warning signs and how Dodgy Garage can fix them affordably.",
    author: "Robby - Dodgy Garage",
    date: "January 22, 2026",
    readTime: "8 min read",
    category: "Engine Maintenance",
    image: "🔧",
    content: `
# EGR Cooler Problems: Symptoms, Causes, and Solutions

The EGR (Exhaust Gas Recirculation) cooler is a critical component in modern diesel engines that helps reduce emissions and improve engine efficiency. However, when it fails, it can cause serious problems and expensive repair bills. In this comprehensive guide, we'll explain EGR cooler problems, symptoms, causes, and how Dodgy Garage can fix them quickly and affordably.

## What is an EGR Cooler and Why Does It Matter?

The EGR cooler is part of your engine's emission control system. It works by recirculating a portion of your exhaust gases back into the engine's intake manifold. This process:

- Reduces harmful nitrogen oxide (NOx) emissions
- Lowers combustion temperatures
- Improves fuel efficiency
- Helps your vehicle pass emissions tests

The cooler cools these hot exhaust gases before they re-enter the engine, protecting internal components from excessive heat and damage.

## Common EGR Cooler Problems

### 1. EGR Cooler Blockage or Clogging

What it means: The EGR cooler has become blocked with carbon deposits and sludge.

Why it happens:
- Poor quality fuel leads to carbon buildup
- Infrequent oil changes allow sludge accumulation
- Short, frequent city driving prevents proper engine cleaning
- Extended periods of idling
- Contaminated fuel or fuel injector issues

Symptoms:
- Rough idle
- Reduced engine power
- Increased fuel consumption
- Black smoke from exhaust
- Check engine light
- Engine knocking or pinging

Solution: Professional cleaning or replacement of the EGR cooler. Cost: £300-£600 depending on severity.

### 2. EGR Cooler Leaks

What it means: The cooler has developed internal or external leaks.

Why it happens:
- Corrosion from moisture and salt
- Thermal stress from repeated heating/cooling cycles
- Manufacturing defects
- Poor maintenance allowing rust formation
- Contaminated coolant

Symptoms:
- Coolant leaks under the vehicle
- Overheating engine
- Sweet smell from exhaust
- Milky or foamy engine oil
- Steam from engine bay
- Loss of coolant without visible leaks

Solution: Replace the EGR cooler with a genuine or quality aftermarket unit. Cost: £400-£800 including labor.

### 3. EGR Cooler Failure

What it means: The cooler has completely failed and is no longer functioning.

Why it happens:
- Severe corrosion
- Internal component breakdown
- Repeated thermal stress
- Poor coolant quality or contamination
- Lack of maintenance

Symptoms:
- Engine overheating
- Severe loss of power
- Excessive smoke
- Check engine light
- Limp mode activation
- Possible engine shutdown

Solution: Complete replacement of the EGR cooler. Cost: £500-£1000 including labor.

### 4. EGR Cooler Valve Sticking

What it means: The EGR valve that controls gas flow is stuck open or closed.

Why it happens:
- Carbon buildup on the valve
- Electrical connector corrosion
- Mechanical failure of valve components
- Poor fuel quality
- Extended periods without driving

Symptoms:
- Rough idle
- Stalling
- Reduced fuel economy
- Check engine light
- Difficulty starting
- Hesitation during acceleration

Solution: Clean or replace the EGR valve. Cost: £200-£400.

## Why You Shouldn't Ignore EGR Cooler Problems

Ignoring EGR cooler issues can lead to catastrophic consequences:

- Engine overheating - Can cause permanent engine damage
- Head gasket failure - Extremely expensive repair (£1500+)
- Engine seizure - Complete engine failure requiring replacement
- Transmission damage - Overheating can damage your transmission
- Safety hazards - Sudden engine shutdown while driving
- MOT failure - Excessive emissions will fail testing

## EGR Cooler Problems by Vehicle Brand

Some vehicles are more prone to EGR cooler issues than others:

### High-Risk Vehicles
- Ford Transit - Common cooler failures
- Volkswagen Transporter - Frequent blockages
- Mercedes Sprinter - Coolant leak issues
- BMW 3 Series - Valve sticking problems
- Audi A4/A6 - Carbon buildup issues

### Moderate-Risk Vehicles
- Vauxhall Vivaro
- Renault Master
- Fiat Ducato
- Peugeot Boxer

If you own one of these vehicles, regular maintenance and early problem detection are especially important.

## Prevention: How to Avoid EGR Cooler Problems

Prevent costly EGR cooler failures with these simple steps:

### 1. Use Quality Fuel
- Buy fuel from reputable stations
- Avoid cheap, low-quality fuel
- Quality fuel burns cleaner and produces less carbon

### 2. Maintain Your Engine
- Regular oil changes (every 6,000-10,000 miles)
- Use manufacturer-recommended oil grade
- Replace oil filters regularly
- Follow manufacturer service intervals

### 3. Keep Your Coolant Fresh
- Replace coolant every 2 years or 40,000 miles
- Use manufacturer-recommended coolant type
- Check coolant level monthly
- Flush the cooling system regularly

### 4. Drive Regularly
- Take regular highway drives to clean the engine
- Avoid excessive idling
- Let the engine warm up properly
- Avoid short, frequent city-only driving

### 5. Monitor Your Vehicle
- Pay attention to warning lights
- Listen for unusual engine sounds
- Watch for performance changes
- Check for fluid leaks
- Act quickly if problems appear

## Diagnosing EGR Cooler Problems

### Professional Diagnostic Process

At Dodgy Garage, we use a comprehensive diagnostic approach:

Step 1: Visual Inspection
- Check for leaks and corrosion
- Inspect hoses and connections
- Look for carbon buildup
- Examine the cooler for damage

Step 2: Computer Diagnostics
- Read error codes from the engine computer
- Identify specific fault codes
- Check sensor readings
- Monitor real-time data

Step 3: Pressure Testing
- Test cooling system pressure
- Check for leaks under pressure
- Verify cooler function
- Test valve operation

Step 4: Thermal Imaging
- Check cooler temperature
- Identify hot spots
- Verify cooling efficiency
- Detect internal blockages

Diagnostic Cost: £50 (credited toward repairs)

## Why Choose Dodgy Garage for EGR Cooler Repairs?

### Expert Technicians
Our team has extensive experience with EGR cooler systems across all major diesel vehicle brands. We understand the complexities and know the best repair solutions.

### Affordable Diagnostics
We charge just £50 for comprehensive diagnostics, which we credit toward your repair bill if you proceed.

### Quality Parts
We use only genuine or quality aftermarket parts that meet manufacturer specifications.

### Mobile Service
We come to you, eliminating:
- Time off work
- Transportation hassles
- Towing costs
- Garage waiting rooms

### Transparent Pricing
We provide fixed quotes before starting work, with no hidden charges or surprise costs.

### Fast Turnaround
Most EGR cooler repairs are completed in 2-4 hours, getting you back on the road quickly.

## Cost Comparison: Dodgy Garage vs. Main Dealers

| Service | Main Dealer | Independent | Dodgy Garage |
|---------|------------|-------------|---------------|
| Diagnostic | £100+ | £50-80 | £50 (credited) |
| EGR Cooler Cleaning | £600+ | £400-500 | £300-400 |
| EGR Cooler Replacement | £1200+ | £700-900 | £400-600 |
| EGR Valve Cleaning | £500+ | £300-400 | £200-300 |
| Mobile Service | No | Maybe | Yes |
| Warranty | Varies | 12 months | 30 days |

## What to Do If You Have EGR Cooler Problems

### Immediate Steps

If you notice symptoms:
1. Don't ignore warning signs
2. Stop driving long distances
3. Contact us immediately
4. Describe your symptoms clearly
5. Book a diagnostic appointment

If your engine is overheating:
1. Pull over safely
2. Turn off the engine
3. Let it cool for 15-20 minutes
4. Call us for emergency assistance
5. Don't restart until cooled

### Contact Dodgy Garage

Phone: 07983 361554
WhatsApp: Message us with your vehicle details
Email: Use our contact form

We'll:
- Schedule a convenient appointment
- Come to your location
- Diagnose the problem
- Provide a fixed quote
- Complete the repair
- Guarantee our work

## Real-World Example: EGR Cooler Failure

Customer: John, Ford Transit Owner
Problem: Engine overheating, loss of power, check engine light
Main Dealer Quote: £1,200 for cooler replacement
Dodgy Garage Solution: £450 for cooler replacement + £50 diagnostic
Result: £700 saved, mobile service, 30-day warranty

## Conclusion

EGR cooler problems don't have to be expensive or inconvenient. With early detection and professional repair, you can avoid catastrophic engine damage and expensive repair bills.

If you're experiencing any symptoms of EGR cooler problems, don't wait. Contact Dodgy Garage today for expert diagnostics and affordable repairs. We'll have you back on the road quickly and safely.

Ready to fix your EGR cooler?
- Call: 07983 361554
- WhatsApp: Message us directly
- Email: Use our contact form

We're here to help with all your diesel engine maintenance needs.

---

*Have more questions about EGR coolers or diesel engine maintenance? Check out our other blog articles on DPF cleaning and AdBlue diagnostics, or subscribe to our YouTube channel for expert tips and tutorials.*
    `,
  },
];

export default function Blog() {
  const [match, params] = useRoute("/blog/:id");

  // If viewing a specific article
  if (match) {
    const article = blogArticles.find((a) => a.id === params?.id);

    if (!article) {
      return (
        <div className="min-h-screen bg-white text-gray-900 pt-24">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-bold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white text-gray-900">
        <ScrollToTop />
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dodgy Garage</h1>
                <p className="text-xs text-gray-600">Mobile DPF Cleaning</p>
              </div>
            </Link>

            <Link href="/" className="text-orange-500 hover:text-orange-600 font-bold">
              Back to Home
            </Link>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Article Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-5xl font-bold mb-6 text-gray-900">{article.title}</h1>

              <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                  {article.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{article.author}</p>
                  <p className="text-sm text-gray-600">Expert DPF Technician</p>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {article.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace("# ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace("## ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h4 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
                        {paragraph.replace("### ", "")}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-gray-700">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="ml-4">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith("1. ")) {
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 text-gray-700">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="ml-4">
                            {item.replace(/^\d+\.\s/, "")}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith("---")) {
                    return <hr key={index} className="my-8 border-gray-300" />;
                  }
                  return (
                    <p key={index} className="text-gray-700">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-500 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Your Issue Sorted?</h3>
              <p className="text-gray-700 mb-6">
                Don't let diesel engine issues affect your vehicle. Contact us today for expert diagnostics and repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07983361554"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Call: 07983 361554
                </a>
                <Link
                  href="/#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Send Message
                </Link>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogArticles
                  .filter((a) => a.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer border border-gray-200 h-full">
                        <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-4xl">
                          {relatedArticle.image}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
                              {relatedArticle.category}
                            </span>
                            <span className="text-xs text-gray-500">{relatedArticle.readTime}</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedArticle.excerpt}</p>
                          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                                {relatedArticle.image}
                              </div>
                              <p className="text-xs font-bold text-gray-900">Robby</p>
                            </div>
                            <span className="text-orange-500 font-bold">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Back to Blog */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    );
  }

  // Blog listing page
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/dodgy-garage-logo.png" alt="Dodgy Garage Logo" className="h-16 w-auto" />
          </Link>

          <Link href="/" className="text-orange-500 hover:text-orange-600 font-bold">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Blog Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dodgy Garage Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert tips, maintenance guides, and insider knowledge about DPF cleaning, diesel engines, and vehicle care.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer h-full border border-gray-200">
                  {/* Article Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-6xl">
                    {article.image}
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm">
                          {article.image}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Robby</p>
                          <p className="text-xs text-gray-500">{article.date}</p>
                        </div>
                      </div>
                      <span className="text-orange-500 font-bold">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              More articles coming soon. Check back regularly for expert tips and maintenance guides.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your DPF Sorted?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Stop worrying about DPF issues. Call us today and we'll have your vehicle running smoothly.
          </p>
          <a
            href="tel:07983361554"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Call: 07983 361554
          </a>
        </div>
      </section>
    </div>
  );
}
