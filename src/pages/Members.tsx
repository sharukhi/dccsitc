import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData.json';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { advisors, panelMembers } = siteData.members;

  const filteredAdvisors = advisors.filter(advisor =>
    advisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advisor.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advisor.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPanelMembers = panelMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section - Full Screen */}
      <div className="p-[150px] h-auto flex flex-col justify-center items-center px-4 bg-gradient-to-br from-background via-background to-muted">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
            Members
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Meet the dedicated individuals who make {siteData.site.name} a thriving community
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-4 text-lg rounded-xl border-2 border-border focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Members Content */}
      <div className=" px-4">
        <div className="container mx-auto  pb-16">

          {/* Advisors Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Moderators & Advisors
            </h2>
            <div className="bg-card rounded-xl border border-black/20 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>Designation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdvisors.map((advisor, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{advisor.name}</TableCell>
                      <TableCell>{advisor.batch}</TableCell>
                      <TableCell>{advisor.designation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Panel Members Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Panel Members & Monitors 
            </h2>
            <div className="bg-card rounded-xl border border-black/20 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>Designation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPanelMembers.map((member, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.batch}</TableCell>
                      <TableCell>{member.designation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* No Results */}
          {filteredAdvisors.length === 0 && filteredPanelMembers.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                No members found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Members;
