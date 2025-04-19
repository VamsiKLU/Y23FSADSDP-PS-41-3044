import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { red, blue, green, orange, purple, pink, teal, brown, cyan, indigo } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const donationCards = [
  {
    title: "Support Cancer Treatment for John Doe",
    subheader: "Fundraiser started on January 20, 2024",
    image: "YOUR_CANCER_IMAGE_URL_HERE",
    description: "John Doe is battling stage 3 cancer and needs urgent medical treatment. Your donation can help cover chemotherapy, hospital expenses, and provide hope for John and his family during this difficult time.",
    avatarColor: red[500]
  },
  {
    title: "Help Educate Underprivileged Children",
    subheader: "Fundraiser started on February 5, 2024",
    image: "YOUR_EDUCATION_IMAGE_URL_HERE",
    description: "Support children's education by providing school supplies, tuition fees, and a brighter future. Every child deserves the right to learn.",
    avatarColor: blue[500]
  },
  {
    title: "Emergency Relief for Natural Disaster Victims",
    subheader: "Fundraiser started on March 10, 2024",
    image: "YOUR_EMERGENCY_IMAGE_URL_HERE",
    description: "Help provide food, shelter, and medical aid to families affected by natural disasters. Your support can save lives.",
    avatarColor: orange[500]
  },
  {
    title: "Save Abandoned Animals in Need",
    subheader: "Fundraiser started on April 2, 2024",
    image: "YOUR_ANIMAL_IMAGE_URL_HERE",
    description: "Rescue and provide care for stray and abandoned animals. Your donation can help fund shelters and medical care.",
    avatarColor: green[500]
  },
  {
    title: "Support Mental Health Awareness",
    subheader: "Fundraiser started on May 10, 2024",
    image: "YOUR_MENTAL_HEALTH_IMAGE_URL_HERE",
    description: "Help fund mental health programs, therapy sessions, and awareness campaigns to support those struggling with mental illnesses.",
    avatarColor: purple[500]
  },
  {
    title: "Food for the Homeless",
    subheader: "Fundraiser started on June 15, 2024",
    image: "YOUR_HUNGER_IMAGE_URL_HERE",
    description: "Donate to provide nutritious meals for homeless individuals and families in need.",
    avatarColor: brown[500]
  },
  {
    title: "Medical Aid for War Victims",
    subheader: "Fundraiser started on July 20, 2024",
    image: "YOUR_WAR_VICTIM_IMAGE_URL_HERE",
    description: "Support medical treatment and rehabilitation programs for victims affected by war and conflicts.",
    avatarColor: pink[500]
  },
  {
    title: "Clean Water for Rural Communities",
    subheader: "Fundraiser started on August 5, 2024",
    image: "YOUR_WATER_IMAGE_URL_HERE",
    description: "Help build wells and provide clean drinking water for remote villages suffering from water scarcity.",
    avatarColor: cyan[500]
  },
  {
    title: "Support for Orphaned Children",
    subheader: "Fundraiser started on September 12, 2024",
    image: "YOUR_ORPHANAGE_IMAGE_URL_HERE",
    description: "Provide food, shelter, and education for orphaned children to ensure a brighter future for them.",
    avatarColor: indigo[500]
  },
  {
    title: "Help Disabled Individuals with Mobility Equipment",
    subheader: "Fundraiser started on October 22, 2024",
    image: "YOUR_DISABLED_SUPPORT_IMAGE_URL_HERE",
    description: "Your donation can help provide wheelchairs, prosthetics, and other mobility aids to disabled individuals in need.",
    avatarColor: teal[500]
  }
];

export default function DonationGrid() {
  const handleShare = (title, text) => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {donationCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: card.avatarColor }} aria-label="donation">D</Avatar>}
              action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
              title={card.title}
              subheader={card.subheader}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
              <IconButton aria-label="share" onClick={() => handleShare(card.title, card.description)}>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}