import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">07 — CONTACT</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-6xl">Let's Build Something<br /><span className="text-slate-500">With Data</span></h2><p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">Open to Data Analyst opportunities where I can apply analytical thinking, technical skills, and business understanding to solve real-world problems.</p></div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <a href="mailto:gauravpatil907540@gmail.com" className="glow-card glass flex items-center gap-4 rounded-2xl p-5"><Mail size={19} className="text-cyan-400" /><div><p className="font-mono text-[9px] text-slate-600">EMAIL</p><p className="mt-1 text-sm">gauravpatil907540@gmail.com</p></div></a>
          <div className="glow-card glass flex items-center gap-4 rounded-2xl p-5"><Phone size={19} className="text-cyan-400" /><div><p className="font-mono text-[9px] text-slate-600">PHONE</p><p className="mt-1 text-sm">+91-7038340562</p></div></div>
          <div className="glow-card glass flex items-center gap-4 rounded-2xl p-5"><MapPin size={19} className="text-cyan-400" /><div><p className="font-mono text-[9px] text-slate-600">LOCATION</p><p className="mt-1 text-sm">Pune, Maharashtra</p></div></div>
          <div className="glow-card glass flex items-center gap-4 rounded-2xl p-5"><div className="h-2 w-2 rounded-full bg-cyan-400" /><div><p className="font-mono text-[9px] text-slate-600">AVAILABILITY</p><p className="mt-1 text-sm">Ready to Relocate</p></div></div>
          <div className="flex gap-3 pt-3">
            <a href="https://github.com/the-gaurav-patil" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/20 hover:text-white" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://linkedin.com/in/gauravpatil9075" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/20 hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <form action="mailto:gauravpatil907540@gmail.com" method="post" encType="text/plain" className="glass rounded-3xl p-6 sm:p-8">
          <label className="font-mono text-[9px] text-slate-500">NAME</label><input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-cyan-400/30" placeholder="Your name" />
          <label className="mt-5 block font-mono text-[9px] text-slate-500">EMAIL</label><input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-cyan-400/30" placeholder="you@example.com" />
          <label className="mt-5 block font-mono text-[9px] text-slate-500">MESSAGE</label><textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-cyan-400/30" placeholder="Tell me about your opportunity..." />
          <button type="submit" className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Send Message</button>
        </form>
      </div>
    </section>
  );
}
