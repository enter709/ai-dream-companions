import { Heart, Mail, MessageCircle, Shield, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">
                DEVOTION
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Experience the future of AI companionship with stunning virtual girlfriends who remember everything about you and grow deeper in love every day.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-gray-300">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-gray-300">Instant Response</span>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Girlfriends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relationship Progression</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Memory System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice Messages</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DevotionAI. All rights reserved. Users must be 18+ years old.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="mailto:hello@devotionai.com" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@devotionai.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}