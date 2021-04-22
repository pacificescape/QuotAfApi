const texts = [
  'I Love You',
  'hello',
  'Test phrase',
  "IT'S WORKING!",
  'IT IS LIVE!',
  "You're amazing"
]

module.exports = () => texts[Math.random() * texts.length | 0]
