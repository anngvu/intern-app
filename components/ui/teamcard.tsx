'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader,CardTitle } from "@/components/ui/card"

interface Team {
  id: number;
  name: string;
  description: string;
}

interface TeamCardProps {
  teamId: number;
}

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>
            {team.name}
          </CardTitle>
          <CardDescription>
          {team.description}  
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
};

export default TeamCard;
