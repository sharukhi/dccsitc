import { Calendar, Clock, Pin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const Announcements = () => {
  const announcements = [
    {
      id: 1, 
      title: "DCCSC & DCCITC Merging",
      notice: "We are excited to announce that the Dhaka Commerce College, IT Club and the Science Club have officially merged to form a new unified platform: Dhaka Commerce College Science & IT Club. This merger aims to bring together innovation, technology, and scientific exploration under one banner—creating more opportunities for learning, collaboration, and excellence. Stay tuned for upcoming activities, projects, and events from the new Science & IT Club!",
      date: "2025-8-8",
      time: "15:06", 
      type: "Announcement",
      priority: "high",
      author: "Club President"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-500/10 text-green-700 border-green-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Event':
        return 'bg-primary text-primary-foreground';
      case 'Announcement':
        return 'bg-primary text-primary-foreground';
      case 'Workshop':
        return 'bg-accent text-accent-foreground';
      case 'Lecture':
        return 'bg-brand-orange text-white';
      case 'Membership':
        return 'bg-brand-green text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Announcements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and announcements from Dhaka Commerce College Science & IT Club
          </p>
        </div>

        {/* Announcements List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="card-clean">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {announcement.priority === 'high' && (
                        <Pin className="h-4 w-4 text-red-500" />
                      )}
                      <Badge className={getTypeColor(announcement.type)}>
                        {announcement.type}
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(announcement.priority)}>
                        {announcement.priority.toUpperCase()} PRIORITY
                      </Badge>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {announcement.title}
                    </h2>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(announcement.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{announcement.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{announcement.author}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {announcement.notice}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Stay Connected
          </h3>
          <p className="text-muted-foreground">
            Follow our social media channels and check this page regularly for the latest updates and announcements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Announcements;