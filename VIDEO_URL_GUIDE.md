# 🎬 Video URL Guide - Rainbow Films

## ✅ **Supported Video Formats**

Your VideoModal component now supports multiple video platforms and formats:

---

## 📺 **1. YouTube Videos**

### **Format 1: Standard YouTube URL**

```
https://www.youtube.com/watch?v=VIDEO_ID
```

**Example:**

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### **Format 2: Short YouTube URL**

```
https://youtu.be/VIDEO_ID
```

**Example:**

```
https://youtu.be/dQw4w9WgXcQ
```

### **Format 3: YouTube Embed URL**

```
https://www.youtube.com/embed/VIDEO_ID
```

**Example:**

```
https://www.youtube.com/embed/dQw4w9WgXcQ
```

**How to get YouTube Video ID:**

1. Open video on YouTube
2. Look at URL: `youtube.com/watch?v=VIDEO_ID`
3. Copy the part after `v=`

---

## 🎥 **2. Vimeo Videos**

### **Format: Vimeo URL**

```
https://vimeo.com/VIDEO_ID
```

**Example:**

```
https://vimeo.com/123456789
```

**How to get Vimeo Video ID:**

1. Open video on Vimeo
2. Look at URL: `vimeo.com/VIDEO_ID`
3. Copy the numbers

---

## 📹 **3. Direct Video Files**

### **Supported Formats:**

- `.mp4` (Recommended)
- `.webm`
- `.ogg`

### **Format: Direct URL**

```
https://your-domain.com/videos/filename.mp4
```

**Examples:**

```
https://example.com/videos/my-film.mp4
https://cdn.example.com/content/video.webm
/uploads/videos/film.mp4 (relative path)
```

---

## 🚀 **How to Add Videos in Admin**

### **Step 1: Choose Your Video Host**

#### **Option A: YouTube (Free, Recommended)**

1. Upload video to YouTube
2. Set privacy to "Public" or "Unlisted"
3. Copy video URL
4. Paste in admin panel

#### **Option B: Vimeo (Professional)**

1. Upload video to Vimeo
2. Copy video URL
3. Paste in admin panel

#### **Option C: Self-Hosted**

1. Upload video to your server
2. Get full URL to video file
3. Paste in admin panel

---

## 📝 **Admin Panel Instructions**

### **Adding a Film:**

1. Login to admin: `/admin/login`
2. Go to Films → Create New
3. Fill in details:
   - **Title**: Film name
   - **Category**: Type of film
   - **Tagline**: Short description
   - **Thumbnail**: Upload image
   - **Video URL**: Paste video URL here ⬅️

### **Video URL Examples:**

✅ **Good URLs:**

```
https://www.youtube.com/watch?v=eeJFh3YhPEs
https://youtu.be/eeJFh3YhPEs
https://vimeo.com/123456789
https://cdn.example.com/video.mp4
```

❌ **Bad URLs:**

```
youtube.com (missing https://)
www.youtube.com (missing protocol)
C:\videos\film.mp4 (local file path)
```

---

## 🎯 **Testing Videos**

### **Test Checklist:**

1. ✅ Video loads in modal
2. ✅ Autoplay works
3. ✅ Controls visible
4. ✅ Fullscreen works
5. ✅ Close button works
6. ✅ ESC key closes modal

### **If Video Doesn't Play:**

**YouTube Issues:**

- Check video is not private
- Verify video ID is correct
- Try different URL format

**Vimeo Issues:**

- Check video privacy settings
- Verify video ID
- Check embed permissions

**Direct Video Issues:**

- Verify file exists at URL
- Check CORS settings
- Ensure file format is supported
- Test URL in browser first

---

## 🔧 **Troubleshooting**

### **Error: "An error occurred"**

**Cause:** Invalid YouTube video ID or private video

**Solution:**

1. Check video is public/unlisted
2. Verify URL is correct
3. Try embed URL format

### **Error: "Video not found"**

**Cause:** Broken URL or deleted video

**Solution:**

1. Test URL in browser
2. Check video still exists
3. Update with new URL

### **Error: "Playback blocked"**

**Cause:** CORS or privacy restrictions

**Solution:**

1. Use YouTube/Vimeo instead
2. Configure CORS on your server
3. Check video privacy settings

---

## 💡 **Best Practices**

### **For Best Performance:**

1. **Use YouTube for:**

   - Public content
   - Free hosting
   - Automatic transcoding
   - Mobile optimization

2. **Use Vimeo for:**

   - Professional content
   - Better quality control
   - Privacy options
   - No ads

3. **Use Direct Files for:**
   - Short clips
   - Internal content
   - Full control
   - Custom branding

### **Video Optimization:**

- **Resolution:** 1080p recommended
- **Format:** MP4 (H.264) for direct files
- **Size:** Keep under 100MB for direct files
- **Aspect Ratio:** 16:9 (widescreen)

---

## 📊 **Recommended Settings**

### **YouTube Upload Settings:**

```
Resolution: 1080p or 4K
Privacy: Unlisted (for portfolio)
Allow embedding: Yes
Comments: Disabled (optional)
```

### **Vimeo Upload Settings:**

```
Resolution: 1080p or 4K
Privacy: Hide from Vimeo
Who can embed: Anywhere
```

---

## 🎬 **Example Film Entry**

```json
{
  "title": "Ethereal Dreams",
  "category": "Music Video",
  "tagline": "A visually stunning music video",
  "thumbnail": "https://example.com/thumb.jpg",
  "videoUrl": "https://www.youtube.com/watch?v=eeJFh3YhPEs"
}
```

---

## ✨ **Features**

Your video player supports:

- ✅ YouTube videos
- ✅ Vimeo videos
- ✅ Direct video files
- ✅ Autoplay
- ✅ Fullscreen
- ✅ Keyboard controls (ESC to close)
- ✅ Mobile responsive
- ✅ Beautiful modal design

---

## 🆘 **Need Help?**

If videos still don't work:

1. Check browser console for errors
2. Test URL directly in browser
3. Verify video platform settings
4. Try different URL format
5. Check network/firewall settings

---

**Happy filming! 🎥✨**
