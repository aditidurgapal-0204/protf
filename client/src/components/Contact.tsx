import { useState } from "react";
import { Send, Mail, Copy, Check, Linkedin, Github, MessageSquare, Sparkles, Loader2, ExternalLink } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const myEmail = "aditidurgapalformal@gmail.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setIsCopied(true);
    toast({
      title: "Email Copied!",
      description: `${myEmail} has been copied to your clipboard.`,
    });
    setTimeout(() => setIsCopied(false), 2500);
  };

  const openInGmail = (subject = "Portfolio Inquiry", body = "") => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send directly via FormSubmit AJAX service configured for aditidurgapalformal@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Message] ${formData.subject} - from ${formData.name}`,
          message: formData.message,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        toast({
          title: "Message Delivered!",
          description: `Thank you, ${formData.name}! Your message was delivered directly to ${myEmail}.`,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        // One-time activation notice
        toast({
          title: "One-Time Activation Required!",
          description: `FormSubmit sent a 1-click confirmation email to ${myEmail}. Please check your inbox (or spam) and click 'Activate Form' once. Opening Gmail for you now as a backup!`,
          duration: 9000
        });
        // Also open Gmail with the message so it's delivered immediately
        openInGmail(`[Portfolio] ${formData.subject}`, `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        // Fallback directly to Gmail web composer
        toast({
          title: "Opening Gmail Web...",
          description: "Dispatching your message directly via Gmail Web to ensure immediate delivery.",
        });
        openInGmail(`[Portfolio] ${formData.subject}`, `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      }
    } catch (error) {
      // Fallback directly to Gmail web composer
      toast({
        title: "Opening Gmail Web...",
        description: "Dispatching your message directly via Gmail to ensure immediate delivery.",
      });
      openInGmail(`[Portfolio] ${formData.subject}`, `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/80 dark:bg-gray-800/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Have a project, job opportunity, research collaboration, or just want to connect? Reach out below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Connect & Social Links (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Direct Email</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Direct inbox delivery</p>
                </div>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-200 truncate select-all">
                  {myEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors shrink-0 shadow-xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Compose Options: Gmail Web & Default App */}
              <div className="space-y-2 mt-4">
                <button
                  type="button"
                  onClick={() => openInGmail()}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm shadow-blue-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Compose in Gmail (Web)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`mailto:${myEmail}?subject=Portfolio%20Inquiry`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-300 text-xs font-medium transition-colors"
                >
                  <span>Open in Default Mail App (Outlook / Apple Mail)</span>
                </a>
              </div>
            </div>

            {/* Social Links Cards - LinkedIn and GitHub only */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Professional Networks
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/aditi-durgapal-02428826a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/40 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-100 dark:border-gray-700/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">linkedin.com/in/aditi-durgapal-02428826a</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    Connect →
                  </span>
                </a>

                <a
                  href="https://github.com/aditidurgapal-0204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/40 hover:bg-gray-100 dark:hover:bg-gray-700/70 border border-gray-100 dark:border-gray-700/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">GitHub</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">github.com/aditidurgapal-0204</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:translate-x-0.5 transition-transform">
                    Follow →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Direct inbox delivery to {myEmail}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Software Engineering Role / Opportunity"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your team, idea, or role..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => openInGmail(`[Portfolio] ${formData.subject || 'Inquiry'}`, `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200 text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
