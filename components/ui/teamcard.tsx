'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader,CardTitle } from "@/components/ui/card"


// Define suitable interface for Team and TeamCardProps


// interface Team



// interface TeamCardProps 



const TeamCard: React.FC<TeamCardProps> = ({ teamId }) => {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://repo-prod.prod.sagebase.org/repo/v1/team/${teamId}`);
        // see example data here https://repo-prod.prod.sagebase.org/repo/v1/team/3416772
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const teamData = await response.json();
        setTeam(teamData);
        setError(null);
      } catch (error: any) {
        setError(error.reason);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [teamId]);


// handle rendering for various other states here





  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>
          </CardTitle>
          <CardDescription> 
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
};

export default TeamCard;
