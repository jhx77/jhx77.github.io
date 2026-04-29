import { Github, Instagram, Mail, MapPin, Twitter } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="联系我"
          description="如果想交流项目、学习笔记或者实习相关信息，可以从这里找到我。"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <a href={`mailto:${profile.emails[0]}`} className="contact-card">
            <Mail size={24} />
            <span>
              <strong>国内邮箱</strong>
              <small>{profile.emails[0]}</small>
            </span>
          </a>
          <a href={`mailto:${profile.emails[1]}`} className="contact-card">
            <Mail size={24} />
            <span>
              <strong>海外邮箱</strong>
              <small>{profile.emails[1]}</small>
            </span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
            <Github size={24} />
            <span>
              <strong>GitHub</strong>
              <small>github.com/jhx77</small>
            </span>
          </a>
          <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="contact-card">
            <Twitter size={24} />
            <span>
              <strong>Twitter</strong>
              <small>@jhxer_7</small>
            </span>
          </a>
          <div className="contact-card">
            <Instagram size={24} />
            <span>
              <strong>Instagram</strong>
              <small>{profile.social.instagram}</small>
            </span>
          </div>
          <div className="contact-card">
            <MapPin size={24} />
            <span>
              <strong>Location</strong>
              <small>{profile.location}</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
