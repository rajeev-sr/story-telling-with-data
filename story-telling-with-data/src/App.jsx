import React from 'react';
import Header from './Header';
import ImageSection from './ImageSection';
import Footer from './Footer';
import './App.css';
import './Header.css'
import './Footer.css'
import './ImageSection.css'

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      <main className="main-content">
      <ImageSection
        title="1. Battle of the Reels: When Gender Tips the Scale!"
        description="The gender distribution chart of the survey reveals that there were slightly more male participants than female participants. This minor imbalance in the dataset may have influenced the overall reel preference trends, as male-dominated categories may have been more represented in the analysis. However, the presence of a significant number of female respondents ensures that the data still provides a relatively balanced view of content preferences across genders. The nearly equal participation of both genders indicates that reel consumption is a widespread trend that appeals to a diverse audience."
        longDescription="A more evenly distributed gender representation in future surveys could further refine the insights into how different genders interact with reel content. While this survey provides valuable takeaways, collecting a larger dataset with balanced demographics would allow for a more precise understanding of trends. This would enable content creators to develop reels that cater to a wider audience, ensuring that engagement strategies are inclusive and reflective of all viewer segments."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739392244/user_uploads/fyscRmgtytKhCty/p1.jpg"
        altText="Bar chart showing gender distribution: Males (45), Females (38)"
        imagePosition="left"
      />

      <ImageSection
        title="2. Reel Realities: What Clicks, What Flops, and the Rise of Edutainment!"
        description="The overall distribution of reel preferences highlights clear audience inclinations toward certain content genres. Romantic reels emerge as the most preferred category, showing that emotionally engaging content has a strong appeal among viewers. Sports and Dance & Music reels also hold high positions, indicating that content that offers excitement, energy, and performance is highly valued. Interestingly, Study reels are also widely consumed, which signifies a growing trend of educational content on social media platforms. This trend suggests that audiences are not only looking for entertainment but also seeking informative and skill-enhancing content through short video formats."
        longDescription="On the other hand, categories such as Racing Cars & Bike, Movie, and Religious reels have lower popularity, which indicates that they cater to niche audiences rather than the general public. This data suggests that content creators who focus on mainstream genres such as romance, music, and education have higher chances of gaining widespread engagement. However, niche creators can still thrive by targeting specific communities interested in their content. Understanding these trends can help influencers, businesses, and social media marketers refine their content strategies, ensuring that their videos align with viewer preferences and generate higher engagement."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739392275/user_uploads/aNPtHmrogGSNdBz/p2.jpg"
        altText="Bar chart showing reel preference distribution: Romantic, Sports, Dance & Music, etc."
        imagePosition="right"
      />

      <ImageSection
        title="3. Reel Wars: How Gender Shapes the Battle for Views!"
        description="The gender-wise distribution of reel preferences provides an insightful look into how different content types appeal to male and female audiences. The data suggests that while both genders consume reels at comparable rates, their preferences show noticeable variations. Romantic and Study-related reels have significant engagement across both genders, highlighting a balanced interest in both entertainment and educational content. Sports and Dance & Music also garner high traction, indicating a preference for dynamic and engaging visual media. Meanwhile, niche categories like Religious and Racing Cars & Bike reels have lower representation, showing that they cater to more specific audiences."
        longDescription="These findings suggest that gender plays a role in shaping reel consumption habits, influencing content trends on social media platforms. Males seem to engage slightly more with reels overall, which might skew certain categories' popularity. For content creators, understanding these preferences can help in curating gender-specific content strategies, ensuring that their reels resonate with the right audience. Marketers and influencers can use this data to refine their outreach and engagement techniques, optimizing their content to better align with their target demographic."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739392286/user_uploads/vcZuQyWEnmzLrKS/p3.jpg"
        altText="Grouped bar chart showing gender-wise reel preferences for each category."
        imagePosition="left"
      />
      <ImageSection
        title="4. Reel Rankings: The Power Players and the Underdogs!"
        description="The fourth graph examines the popularity of reels by categorizing them based on user preferences. The data is divided into three preference levels, allowing for a detailed understanding of which genres attract the highest level of interest. Notably, Romantic and Sports reels emerge as the most frequently chosen options across all preference levels."
        longDescription="This detailed segmentation provides deeper insights into user behavior. While some genres maintain steady popularity across all preference levels, others, such as Anime and Religious content, have distinct fluctuations. This information is crucial for content creators and marketers looking to fine-tune their media strategies based on viewer inclinations."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739393064/user_uploads/BIZNjCrCDrcCzJp/p6.jpg"
        altText="Grouped bar chart showing reel popularity by preference."
        imagePosition="right"
      />

      <ImageSection
        title="5. Reel Preferences Uncovered: Do Men and Women Swipe Differently?"
        description="The final visualization presents a comparative analysis of male and female preferences across different reel categories. The data suggests that Romantic and Sports reels are highly favored among both genders. However, there are slight variations in preference counts, with some categories being more prominent among males (e.g., Racing Cars & Bike) and others being more popular among females (e.g., Dance & Music)."
        longDescription="Understanding such variations is crucial for content strategists and digital marketers. By recognizing these differences, media platforms can create a more personalized experience for users, ensuring that content recommendations align with their specific interests. This data-driven approach can lead to higher engagement and viewer retention across various platforms."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739392304/user_uploads/RXIECczPFOQRskj/p4.jpg"
        altText="Grouped bar chart showing gender-wise reel preferences for each category."
        imagePosition="right"
      />

      {/* <ImageSection
        title="REEL PREFERENCE DIVERSITY BY GENDER"
        description="Dedicate even more time to developing your data storytelling skills! Enroll in our in-depth 8-week course for a multi-media experience that combines lectures, reading, videos, podcasts, exercises, and a final project."
        longDescription="A more detailed explanation of the Gender distribution chart, including insights about potential biases and considerations when interpreting the data."
        imageUrl="https://pplx-res.cloudinary.com/image/upload/v1739393051/user_uploads/ReRtBCIEKjfRXyb/p5.jpg"
        altText="Bar chart showing reel preference diversity by gender. Female: 12, Male: 12"
        imagePosition="left"
      /> */}

      {/* What's Next Section */}
      <div style={{ backgroundColor: '#f8f9fa', paddingLeft: '110px',paddingRight:"110px", borderLeft: '10px solid black', marginTop: '30px' }}>
          <h3 style={{ color: '#007bff', marginBottom: '10px' }}>What’s Next?</h3>
          <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.5' }}>
            Our analysis of reel preferences provides valuable insights into how different content types resonate with audiences. 
            But what does this mean for the future of short-form video content? In our next exploration, we’ll dive deeper into 
            <strong> the psychology behind reel consumption</strong>—unpacking how algorithms, emotions, and trends shape what we watch. 
            Stay tuned for more data-driven revelations!
          </p>
        </div>

      
      </main>
      

      <Footer />
    </div>
  );
}

export default App;





