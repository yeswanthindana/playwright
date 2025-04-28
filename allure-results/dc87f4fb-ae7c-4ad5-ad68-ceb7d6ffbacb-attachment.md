# Test info

- Name: test Data Driven using JSON :  Java Script 
- Location: C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-adv-datadriven\datadriven_json.spec.ts:22:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#channel-title')
- Expected string  -  1
+ Received string  + 13

- Playwright
+
+   
+     JavaScript Mastery
+   
+   
+   
+     JavaScript Mastery
+   
+
+
+
+
+
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#channel-title')
    2 × locator resolved to <ytd-channel-name wrap-text="" id="channel-title" class="style-scope ytd-channel-renderer">…</ytd-channel-name>
      - unexpected value "
  
    JavaScript Mastery
  
  
  
    JavaScript Mastery
  




"

    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-adv-datadriven\datadriven_json.spec.ts:27:54
```

# Page snapshot

```yaml
- dialog
- banner:
  - button "Guide"
  - link "YouTube Home":
    - /url: /
  - text: IN
  - button "Skip navigation"
  - search:
    - combobox "Search" [expanded]: Java Script
    - button "Clear search query"
    - button "Search"
  - button "Search with your voice"
  - tooltip "tooltip"
  - button "Settings"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252Fresults%253Fsearch_query%253DJava%252BScript&hl=en&ec=65620
- navigation:
  - tab "Home":
    - link "Home":
      - /url: /
  - tab "Shorts"
  - tab "Subscriptions":
    - link "Subscriptions":
      - /url: /feed/subscriptions
  - tab "You":
    - link "You":
      - /url: /feed/you
  - tab "History":
    - link "History":
      - /url: /feed/history
- main:
  - tablist:
    - tab "All" [selected]
    - tab "Shorts"
    - tab "Videos"
    - tab "Unwatched"
    - tab "Watched"
    - tab "Recently uploaded"
    - tab "Live"
    - tab "Full course chai aur code"
    - tab "Basics"
    - tab "Full course bro code"
    - tab "Full course in telugu"
    - tab "Full course tamil"
    - tab "Full course apna college"
    - tab "Code with harry"
    - tab "Full course love babbar"
    - tab "Full course in english"
    - tab "Akshay saini"
    - tab "Crash course"
    - tab "Dom"
    - tab "Playlists"
  - button "Next"
  - button "Search filters": Filters
  - tooltip "tooltip"
  - text: Showing results for
  - link "Javascript":
    - /url: /results?search_query=Javascript
  - text: Search instead for
  - link "Java Script":
    - /url: /results?search_query=Java+Script&sp=QgIIAQ%253D%253D
  - heading "Switch to Chrome for a great browsing experience." [level=3]
  - text: Chrome works on any operating system and all your devices.
  - img "Sponsored":
    - paragraph: Sponsored
    - text: ·
  - link "Google Chrome":
    - /url: /@GoogleChrome
  - tooltip "tooltip"
  - link "Watch":
    - /url: /watch?v=CPWEyB1Jl9g
  - link "Download":
    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CUSaEGCwPaKWQDPms3LUPlqSuwAnL0oHSftntreO7E2QQASAAYOWC5IOYDoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGOkNyxKKgDBMgDCqoEoQJP0BMd18xUKAopYH_bCM2bkaCXsarP730wQwAstZ6EZI7zXc2LJAnDctmhA8GT2_l2jmsLLZWFvxm4i76hKzLWpc7hhcrmGqdqN9ngHvNjXeBtOaJ_2QrKNu6AOXW56gAZ7Gei5kFkBKmc9ZlL82WMSoG2-VLJupRiTMdJBY2Z-PvDtJfjo9GK1KNde2jGaSgSGefA4RMIjSI3SOs1lUw3czQtXPg3M6Nj2F-ngsWnNfgWA14N4A1gKpOyDlQb_9Ccg8wHB9jqhjUobEoH7HK_rVDAj_-1Lb8yos7Hey_9PHP2YjXlRHZOBeGKxvKv1vFbS1wcgwpcML0ivGA5VSOSUEWShWreeSIRsj3jAHSShWalY2FN5ODRCsMBfTKi1rXikgUHCBN4q9WzI6AGoQGAB-OJzSKQBwSoB_mxsQKoB4C6sQKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB73NsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB4KqsQKoB4QIqAeo0huoB7YHqAex3BuoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_zLsQKoB_2ysQKoB_e4sQKoB_i4sQKoB83HsQKoB6XMsQKoB4HGG6gH_K-xAqgH1c4bqAerxRuoB5zcG6gHt6GxAqgH1amxAqgH3rWxAqgH6rGxAqgHvrexAqgHmbWxAqgHhcGxAqgH66WxAqgHyqmxAqgHwsixApIIC0NQV0V5QjFKbDlnqAgB0ggpCIBBEAEYXjICggI6DIBCgMCAgICAgIACIkjZoNI1UBRYiO_QlJj6jAOaCR5odHRwczovL3d3dy5nb29nbGUuY29tL2Nocm9tZS-xCa1X3iGVEWzPyAkXyAmPAcgJwgG6CzUIAxAFGAQgBigBMAVAAUgAWH1gAGgAcAGIAQCYAQGiAQgKAKgCAdgCAqgBAdgBAYACAYgCBtALEuALAdoMJgoLELDAz_SVpZfDygESAgEDGg0Y6sC0-FEg3r2vxfUEQAFKAhAfmg0BEqANAaoNAklOyA0B0g3wAmh0dHBzOi8vYWQuZG91YmxlY2xpY2submV0L2RkbS90cmFja2Nsay9ONTI5NS41MDg3ODEzREVNQU5ER0VOL0IzMjc1ODAzMy40MTAxMjM2MTM7ZGNfdHJrX2FpZD02MDE5NjQyOTY7ZGNfdHJrX2NpZD0yMjY0NTU5Mzg7ZGNfbGF0PTtkY19yZGlkPTt0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudD07dGZ1YT07Z2Rwcj0ke0dEUFJ9O2dkcHJfY29uc2VudD0ke0dEUFJfQ09OU0VOVF83NTV9O2x0ZD07ZGNfdGR2PTE7ZGNfcnVpPTE7ZGNfZXBzPUFIYXM4Y0JmbUxPZTk4Q1EtUzNLTHFRWUU0TEtYdHBON3dNR1NDblhSUk5uTk1vYk1kcWZESnV3M2FldU1OMFV6U0lXdjcyTHRyN1lIakEzdVB0VTV3O2RjX3B1YmlkPTY_Z2FkX3NvdXJjZT0yuBP___________8BiBQEsBQDwBWBgIBA0BUB2BUBmBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBuhcGKAAwADgB0BgB8BgB&ase=2&gclid=EAIaIQobChMIpfzQlJj6jAMVeRa3AB0WkguYEAEYASAAEgLz5_D_BwE&num=1&cid=CAASFeRoYSE8nbNS_Wwc4SO7n8maaYEO-A&ad_cpn=%5BCPN%5D&sig=AOD64_3yqAcanCr6YsiIYtZDnet8gdfzzQ&ctype=110&video_id=CPWEyB1Jl9g&label=video_click_to_advertiser_site&ms=%5BCLICK_MS%5D&nb=%5BNB%5D&nx=%5BNX%5D&ny=%5BNY%5D&dim=%5BDIM%5D
  - button
  - heading "JavaScript Full Course (2024-25) - Beginners to Pro" [level=3]:
    - link "JavaScript Full Course (2024-25) - Beginners to Pro":
      - /url: /watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW
  - link "Shradha Khapra":
    - /url: /@shradhaKD
  - link "Playlist":
    - /url: /@shradhaKD
  - link "JavaScript Full Course ❤️ | Variables & Data Types | Lecture 1 · 1:21:11":
    - /url: /watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW
  - 'link "Lecture 2 : Operators and Conditional Statements | JavaScript Full Course · 1:16:47"':
    - /url: /watch?v=Zg4-uSjxosE&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW
  - link "View full playlist":
    - /url: /playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW
  - heading "Shorts" [level=2]
  - button "More actions"
  - link:
    - /url: /shorts/Y3Lmf5QoaKA
  - 'heading "Created Reptile | HTML | CSS | Javascript #youtubeshorts #trending #coding #animation #ai #learning, 3.4 million views - play Short" [level=3]':
    - 'link "Created Reptile | HTML | CSS | Javascript #youtubeshorts #trending #coding #animation #ai #learning"':
      - /url: /shorts/Y3Lmf5QoaKA
  - button "More actions"
  - link "New":
    - /url: /shorts/QHxSa_7LWSU
  - 'heading "Big problem. #coding #programming #javascript #css, 25K views - play Short" [level=3]':
    - 'link "Big problem. #coding #programming #javascript #css"':
      - /url: /shorts/QHxSa_7LWSU
  - button "More actions"
  - link:
    - /url: /shorts/qEfqjKLCwhU
  - 'heading "Trolley Problem Solved #coding #programming #javascript #python, 31 million views - play Short" [level=3]':
    - 'link "Trolley Problem Solved #coding #programming #javascript #python"':
      - /url: /shorts/qEfqjKLCwhU
  - button "More actions"
  - link:
    - /url: /shorts/5-oiLKEWIEw
  - 'heading "Best Programming Languages #programming #coding #javascript, 7.4 million views - play Short" [level=3]':
    - 'link "Best Programming Languages #programming #coding #javascript"':
      - /url: /shorts/5-oiLKEWIEw
  - button "More actions"
  - link:
    - /url: /shorts/QnbspJRf7wc
  - 'heading "#shorts #programming #coding #css #html #javascript #ui #ux #design #programmers, 9.6 million views - play Short" [level=3]':
    - 'link "#shorts #programming #coding #css #html #javascript #ui #ux #design #programmers"':
      - /url: /shorts/QnbspJRf7wc
  - button "More actions"
  - link:
    - /url: /shorts/qC-Yadx3O4A
  - 'heading "Simple JavaScript Basics #javascript #code #tutorial #javascriptdeveloper, 42K views - play Short" [level=3]':
    - 'link "Simple JavaScript Basics #javascript #code #tutorial #javascriptdeveloper"':
      - /url: /shorts/qC-Yadx3O4A
  - button "More actions"
  - button "Next"
  - link "Unlock Free Trading Education":
    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C-GfAGCwPaKWQDPms3LUPlqSuwAn52ZfdfsffyKLME7CQHxACIABg5YLkg5gOggEXY2EtcHViLTYyMTk4MTE3NDcwNDkzNzGgAd_o_5oCqQIJN6vzLCZJPqgDBMgDCqoErwJP0BMd18xUKAopYH_bCM2bkaCXsarP730wQwAstZ6EZI7zXc2LJAnDctmhA8GT2_l2jmsLLZWFvxm4i76hKzLWpc7hhcrmGqdqN9ngHvNjXeBtOaJ_2QrKNu6AOXW56gAZ7Gei5kFkBKmc9ZlL82WMSoG2-VLJupRiTMdJBY2Z-PvDtJfjo9GK1KNde2jGaSgSGefA4RMIjSI3SOs1lUw3czQtXPg3M6Nj2F-ngsWnNfgWA14N4A1gKpOyDlQb_9Ccg8wHB9jqhjUobEoH7HK_rVDAj_-1LekOos7Dey-CXAeMZDXlYx87rgNtSbr4bhOemlIKmOyMOj-xayartvU2LodC8LwlSoSW3t8a5nG6QGOftY6UPko22ywoR9wjXUxy5lt_lhLaQsutZQy3rPuSBQgIE3iMvMaIAqAGboAHiZeA5QGQBwSoB_mxsQKoB4C6sQKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB73NsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB4KqsQKoB4QIqAeo0huoB7YHqAex3BuoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_zLsQKoB_2ysQKoB_e4sQKoB_i4sQKoB83HsQKoB6XMsQKoB4HGG6gH_K-xAqgHq8UbqAe3obECqAfVqbECqAfetbECqAfqsbECqAe-t7ECqAeZtbECqAeFwbECqAfrpbECqAfKqbEC0ggpCIBBEAEYXjICggI6DIBCgMCAgICAgIACIkjZoNI1UBRYiO_QlJj6jAOaCVpodHRwczovL3RyYWRld2lzZS50aGVmdXR1cmUudW5pdmVyc2l0eS9jbHY5Y2w1OXIxdzRjcGN1NjluaTRxNWtiL2xvbmctZnJlZS9oaXJhbC1jb21tb2RpdHmxCbBTiRhUv6ePyAkAyAmKApgLAboLNQgDEAUYBCAIKAEwBUABSABYTmAAaABwAYgBAJgBAaIBCAoAqAIB2AICqAEB2AEBgAIBiAIG0AsS2gwmCgsQwIL4rY7v1erwARICAQMaDRjP8IiAUyDk4rmBoQVAAUoCEB-aDQESoA0Bqg0CSU7IDQHSDfcBaHR0cHM6Ly90cmFkZXdpc2UudGhlZnV0dXJlLnVuaXZlcnNpdHkvY2x2OWNsNTlyMXc0Y3BjdTY5bmk0cTVrYi9sb25nLWZyZWUvaGlyYWwtY29tbW9kaXR5P3NvdXJjZT1nb29nbGUmY29tbWVudD1IU0NPX1RXMjRfMjMvMDIvMjAyNV9EZW1hbmRHZW5fRkFVJGFkMiZjYW1wYWlnbmlkPTIyMjgwMjg4MzM1JmFkZ3JvdXBpZD0xODA2NjAxMDU1NzIma2V5d29yZD0mZGV2aWNlPWMmYWRfaWQ9NzM0NDE1NTIyODY5JmdhZF9zb3VyY2U9MrgT____________AYgUAbAUA8AVgYCAQNAVAdgVAZgWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXCCvmxX__KL-6FwYoADAAOAHQGAHwGAE&ase=2&gclid=EAIaIQobChMIpfzQlJj6jAMVeRa3AB0WkguYEAEYAiAAEgKFcfD_BwE&num=2&cid=CAASFeRoYSE8nbNS_Wwc4SO7n8maaYEO-A&sig=AOD64_0BZ-x3-Y3JLo8z6O3cztgMeM1weg&ms=%5BCLICK_MS%5D&nb=0&nx=%5BNX%5D&ny=%5BNY%5D&dim=%5BDIM%5D
  - link "Learn Commodity Trading from Hiral Shah":
    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C-GfAGCwPaKWQDPms3LUPlqSuwAn52ZfdfsffyKLME7CQHxACIABg5YLkg5gOggEXY2EtcHViLTYyMTk4MTE3NDcwNDkzNzGgAd_o_5oCqQIJN6vzLCZJPqgDBMgDCqoErwJP0BMd18xUKAopYH_bCM2bkaCXsarP730wQwAstZ6EZI7zXc2LJAnDctmhA8GT2_l2jmsLLZWFvxm4i76hKzLWpc7hhcrmGqdqN9ngHvNjXeBtOaJ_2QrKNu6AOXW56gAZ7Gei5kFkBKmc9ZlL82WMSoG2-VLJupRiTMdJBY2Z-PvDtJfjo9GK1KNde2jGaSgSGefA4RMIjSI3SOs1lUw3czQtXPg3M6Nj2F-ngsWnNfgWA14N4A1gKpOyDlQb_9Ccg8wHB9jqhjUobEoH7HK_rVDAj_-1LekOos7Dey-CXAeMZDXlYx87rgNtSbr4bhOemlIKmOyMOj-xayartvU2LodC8LwlSoSW3t8a5nG6QGOftY6UPko22ywoR9wjXUxy5lt_lhLaQsutZQy3rPuSBQgIE3iMvMaIAqAGboAHiZeA5QGQBwSoB_mxsQKoB4C6sQKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB73NsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB4KqsQKoB4QIqAeo0huoB7YHqAex3BuoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_zLsQKoB_2ysQKoB_e4sQKoB_i4sQKoB83HsQKoB6XMsQKoB4HGG6gH_K-xAqgHq8UbqAe3obECqAfVqbECqAfetbECqAfqsbECqAe-t7ECqAeZtbECqAeFwbECqAfrpbECqAfKqbEC0ggpCIBBEAEYXjICggI6DIBCgMCAgICAgIACIkjZoNI1UBRYiO_QlJj6jAOaCVpodHRwczovL3RyYWRld2lzZS50aGVmdXR1cmUudW5pdmVyc2l0eS9jbHY5Y2w1OXIxdzRjcGN1NjluaTRxNWtiL2xvbmctZnJlZS9oaXJhbC1jb21tb2RpdHmxCbBTiRhUv6ePyAkAyAmKApgLAboLNQgDEAUYBCAIKAEwBUABSABYTmAAaABwAYgBAJgBAaIBCAoAqAIB2AICqAEB2AEBgAIBiAIG0AsS2gwmCgsQwIL4rY7v1erwARICAQMaDRjP8IiAUyDk4rmBoQVAAUoCEB-aDQESoA0Bqg0CSU7IDQHSDfcBaHR0cHM6Ly90cmFkZXdpc2UudGhlZnV0dXJlLnVuaXZlcnNpdHkvY2x2OWNsNTlyMXc0Y3BjdTY5bmk0cTVrYi9sb25nLWZyZWUvaGlyYWwtY29tbW9kaXR5P3NvdXJjZT1nb29nbGUmY29tbWVudD1IU0NPX1RXMjRfMjMvMDIvMjAyNV9EZW1hbmRHZW5fRkFVJGFkMiZjYW1wYWlnbmlkPTIyMjgwMjg4MzM1JmFkZ3JvdXBpZD0xODA2NjAxMDU1NzIma2V5d29yZD0mZGV2aWNlPWMmYWRfaWQ9NzM0NDE1NTIyODY5JmdhZF9zb3VyY2U9MrgT____________AYgUAbAUA8AVgYCAQNAVAdgVAZgWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXCCvmxX__KL-6FwYoADAAOAHQGAHwGAE&ase=2&gclid=EAIaIQobChMIpfzQlJj6jAMVeRa3AB0WkguYEAEYAiAAEgKFcfD_BwE&num=2&cid=CAASFeRoYSE8nbNS_Wwc4SO7n8maaYEO-A&sig=AOD64_0BZ-x3-Y3JLo8z6O3cztgMeM1weg&ms=%5BCLICK_MS%5D&nb=7&nx=%5BNX%5D&ny=%5BNY%5D&dim=%5BDIM%5D
  - text: Sponsored · Tradewise
  - button "My Ad Center"
  - heading "JavaScript Tutorials for Beginners in Hindi" [level=3]:
    - link "JavaScript Tutorials for Beginners in Hindi":
      - /url: /watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR
  - link "CodeWithHarry":
    - /url: /@CodeWithHarry
  - link "Course":
    - /url: /@CodeWithHarry
  - 'link "Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1 · 13:46"':
    - /url: /watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR
  - 'link "Variables in JavaScript | JavaScript Tutorial in Hindi #2 · 13:34"':
    - /url: /watch?v=Q4p8vRQX8uY&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR
  - link "View full course":
    - /url: /playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR
  - heading "Chai aur Javascript | हिन्दी" [level=3]:
    - link "Chai aur Javascript | हिन्दी":
      - /url: /watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
  - link "Chai aur Code":
    - /url: /@chaiaurcode
  - link "Playlist":
    - /url: /@chaiaurcode
  - 'link "Javascript for beginners | chai aur #javascript · 5:05"':
    - /url: /watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
  - 'link "Setting up environment in local machine for Javascript | chai aur #javascript · 11:50"':
    - /url: /watch?v=cvoLc3deAdQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
  - link "View full playlist":
    - /url: /playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
  - link "Hot Platformer Games":
    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CqBeNGCwPaKWQDPms3LUPlqSuwAmfkMzUftrCqrmlE2QQAyAAYOWC5IOYDoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAG_l93EKqkCyI8e5hVNgT6oAwTIAwqqBJkCT9ATHdfMVCgKKWB_2wjNm5Ggl7Gqz-99MEMALLWehGSO813NiyQJw3LZoQPBk9v5do5rCy2Vhb8ZuIu-oSsy1qXO4YXK5hqnajfZ4B7zY13gbTmif9kKyjbugDl1ueoAGexnouZBZASpnPWZS_NljEqBtvlSybqUYkzHSQWNmfj7w7SX46PRitSjXXtoxmkoEhnnwOETCI0iN0jrNZVMN3M0LVz4NzOjY9hfp4LFpzX4FgNeDeANYCqTsg5UG__QnIPMBwfY6oY1KGxKB-xyv61QwI__tS31NKLOx3sv5ApN9WI15QN8Rv4EbUm6-G4Ti5ooRLfxXN336K06q_arHmmNapdE_Jejmkv9CcKStadqvbuWPIRLHC2SBQgIE3js37vYBaAGboAHv8-tpAWQBwSoB_mxsQKoB4C6sQKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB73NsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB4KqsQKoB4QIqAeo0huoB7YHqAex3BuoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_zLsQKoB_2ysQKoB_e4sQKoB_i4sQKoB83HsQKoB6XMsQKoB4HGG6gH_K-xAqgHq8UbqAe3obECqAfVqbECqAfetbECqAfqsbECqAe-t7ECqAeZtbECqAeFwbECqAfrpbECqAfKqbEC0ggpCIBBEAEYXjICggI6DIBCgMCAgICAgIACIkjZoNI1UBRYiO_QlJj6jAOaCSRodHRwczovL3d3dy5lbmpveXNnYW1lLmNvbS9leHRlbnNpb26xCf9FPScdOjuwyAkAyAmKApgLAboLNQgDEAUYBCAIKAEwBUABSABYTmAAaABwAYgBAJgBAaIBCAoAqAIB2AICqAEB2AEBgAIBiAIG0AsS2gwlCgoQkIav2YWz-vB5EgIBAxoNGL2ysOVQIMi9iLmIBUABSgIQH5oNARKgDQGqDQJJTsgNAdINMWh0dHBzOi8vd3d3LmVuam95c2dhbWUuY29tL2V4dGVuc2lvbj9nYWRfc291cmNlPTK4E____________wGwFAPAFYGAgEDQFQHYFQGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF9OQEDttKQBruhcGKAAwADgB0BgB8BgB&ase=2&gclid=EAIaIQobChMIpfzQlJj6jAMVeRa3AB0WkguYEAEYAyAAEgL3zPD_BwE&num=3&cid=CAASFeRoYSE8nbNS_Wwc4SO7n8maaYEO-A&sig=AOD64_3xq5wtmVZEuNZVs7UhynBcxRp0lw&ms=%5BCLICK_MS%5D&nb=0&nx=%5BNX%5D&ny=%5BNY%5D&dim=%5BDIM%5D
  - link "Enjoy the Ultimate Gaming Experience with Others of Your Age":
    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CqBeNGCwPaKWQDPms3LUPlqSuwAmfkMzUftrCqrmlE2QQAyAAYOWC5IOYDoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAG_l93EKqkCyI8e5hVNgT6oAwTIAwqqBJkCT9ATHdfMVCgKKWB_2wjNm5Ggl7Gqz-99MEMALLWehGSO813NiyQJw3LZoQPBk9v5do5rCy2Vhb8ZuIu-oSsy1qXO4YXK5hqnajfZ4B7zY13gbTmif9kKyjbugDl1ueoAGexnouZBZASpnPWZS_NljEqBtvlSybqUYkzHSQWNmfj7w7SX46PRitSjXXtoxmkoEhnnwOETCI0iN0jrNZVMN3M0LVz4NzOjY9hfp4LFpzX4FgNeDeANYCqTsg5UG__QnIPMBwfY6oY1KGxKB-xyv61QwI__tS31NKLOx3sv5ApN9WI15QN8Rv4EbUm6-G4Ti5ooRLfxXN336K06q_arHmmNapdE_Jejmkv9CcKStadqvbuWPIRLHC2SBQgIE3js37vYBaAGboAHv8-tpAWQBwSoB_mxsQKoB4C6sQKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB73NsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB4KqsQKoB4QIqAeo0huoB7YHqAex3BuoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_zLsQKoB_2ysQKoB_e4sQKoB_i4sQKoB83HsQKoB6XMsQKoB4HGG6gH_K-xAqgHq8UbqAe3obECqAfVqbECqAfetbECqAfqsbECqAe-t7ECqAeZtbECqAeFwbECqAfrpbECqAfKqbEC0ggpCIBBEAEYXjICggI6DIBCgMCAgICAgIACIkjZoNI1UBRYiO_QlJj6jAOaCSRodHRwczovL3d3dy5lbmpveXNnYW1lLmNvbS9leHRlbnNpb26xCf9FPScdOjuwyAkAyAmKApgLAboLNQgDEAUYBCAIKAEwBUABSABYTmAAaABwAYgBAJgBAaIBCAoAqAIB2AICqAEB2AEBgAIBiAIG0AsS2gwlCgoQkIav2YWz-vB5EgIBAxoNGL2ysOVQIMi9iLmIBUABSgIQH5oNARKgDQGqDQJJTsgNAdINMWh0dHBzOi8vd3d3LmVuam95c2dhbWUuY29tL2V4dGVuc2lvbj9nYWRfc291cmNlPTK4E____________wGwFAPAFYGAgEDQFQHYFQGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF9OQEDttKQBruhcGKAAwADgB0BgB8BgB&ase=2&gclid=EAIaIQobChMIpfzQlJj6jAMVeRa3AB0WkguYEAEYAyAAEgL3zPD_BwE&num=3&cid=CAASFeRoYSE8nbNS_Wwc4SO7n8maaYEO-A&sig=AOD64_3xq5wtmVZEuNZVs7UhynBcxRp0lw&ms=%5BCLICK_MS%5D&nb=7&nx=%5BNX%5D&ny=%5BNY%5D&dim=%5BDIM%5D
  - text: Sponsored · enjoysgame
  - button "My Ad Center"
  - heading "JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects & Practice Questions)" [level=3]:
    - link "JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects & Practice Questions)":
      - /url: /watch?v=VlPiVmYuoqw&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 4.4M views •1 year ago
  - link "Go to channel":
    - /url: /@ApnaCollegeOfficial
  - link "Apna College":
    - /url: /@ApnaCollegeOfficial
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Time stamp Introduction 00:00:00 Variables and data types 00:01:25 Operators 01:21:18 Loops 02:30:37 Arrays 03:43:30 ...
  - tooltip "tooltip"
  - text: 14 chapters
  - button "Introduction | Variables and data types | Operators | Loops | Arrays | Functions | DOM part 1 | DOM Part 2 | Events | Building Game | Classes | Callback | Fetch API | Project Currency converter"
  - button "More"
  - heading "Shorts" [level=2]
  - button "More actions"
  - link:
    - /url: /shorts/qC-Yadx3O4A
  - 'heading "Simple JavaScript Basics #javascript #code #tutorial #javascriptdeveloper, 42K views - play Short" [level=3]':
    - 'link "Simple JavaScript Basics #javascript #code #tutorial #javascriptdeveloper"':
      - /url: /shorts/qC-Yadx3O4A
  - button "More actions"
  - link:
    - /url: /shorts/rVDBxCgU5oA
  - heading "When a Javascript developer discovers React for the first time..., 1.9 million views - play Short" [level=3]:
    - link "When a Javascript developer discovers React for the first time...":
      - /url: /shorts/rVDBxCgU5oA
  - button "More actions"
  - link:
    - /url: /shorts/VUmqnkDTHiM
  - 'heading "Best example of html css javascript| code with harry| #html #css #javascript, 1.7 million views - play Short" [level=3]':
    - 'link "Best example of html css javascript| code with harry| #html #css #javascript"':
      - /url: /shorts/VUmqnkDTHiM
  - button "More actions"
  - link:
    - /url: /shorts/yAdFPFE-EJo
  - 'heading "#day64 - Can you solve these #javascript questions asked in #deloitte interview #coding #frontend, 69K views - play Short" [level=3]':
    - 'link "#day64 - Can you solve these #javascript questions asked in #deloitte interview #coding #frontend"':
      - /url: /shorts/yAdFPFE-EJo
  - button "More actions"
  - link:
    - /url: /shorts/QaU6gEtOwyE
  - heading "Roadmap to Web Development | for Students, 2.5 million views - play Short" [level=3]:
    - link "Roadmap to Web Development | for Students":
      - /url: /shorts/QaU6gEtOwyE
  - button "More actions"
  - link:
    - /url: /shorts/5XaCpNWRB_Q
  - 'heading "Typescript vs Javascript Check out the Link in Bio for free live Masterclass#coding #programming #ad, 88K views - play Short" [level=3]':
    - 'link "Typescript vs Javascript Check out the Link in Bio for free live Masterclass#coding #programming #ad"':
      - /url: /shorts/5XaCpNWRB_Q
  - button "More actions"
  - button "Next"
  - heading "JavaScript Tutorial Full Course - Beginner to Pro" [level=3]:
    - link "JavaScript Tutorial Full Course - Beginner to Pro":
      - /url: /watch?v=EerdGm-ehJQ&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 4.7M views •11 months ago
  - link "Go to channel":
    - /url: /@SuperSimpleDev
  - link "SuperSimpleDev":
    - /url: /@SuperSimpleDev
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: "Lessons: 00:00:00 Intro 00:02:01 1 JavaScript Basics 00:14:48 2 Numbers and Math 00:43:26 3 Strings 01:07:32 4 HTML CSS ..."
  - tooltip "tooltip"
  - img "Lecture":
    - paragraph: Lecture
  - text: 27 chapters
  - button "Intro | 1 JavaScript Basics | 2 Numbers and Math | 3 Strings | 4 HTML CSS Review, console.log | 5 Variables | 6 Booleans and If-Statements | 7 Functions | 8 Objects | 9 Document Object Model (DOM) | 10 HTML, CSS, and JavaScript Together | 11 Arrays and Loops | 11 (Part 2) Arrays and Loops | 12 Advanced Functions | 12 (Part 2) Advanced Functions | 13 Start the Amazon Project and Intro to Git | 14 Modules | 15 External Libraries | 16 Testing | Testing Frameworks | 17 Object-Oriented Programming | Classes | Inheritance | 18 Intro to Backend, Callbacks, Async Await | Promises and fetch | Async Await | Next steps after this course"
  - button "More"
  - heading "JavaScript tutorial for Beginners in Tamil | DOM Explained | Mini Project in JavaScript" [level=3]:
    - link "JavaScript tutorial for Beginners in Tamil | DOM Explained | Mini Project in JavaScript":
      - /url: /watch?v=poo0BXryffI&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 1.5M views •1 year ago
  - link "Go to channel":
    - /url: /@ErrorMakesClever
  - link "Error Makes Clever":
    - /url: /@ErrorMakesClever
  - tooltip "tooltip"
  - text: "Timestamps: 00:00 - Intro 00:52 - Course Preview 01:24 - JavaScript Intro 02:34 - Variables 22:12 - Keywords 23:09 - Comments ..."
  - tooltip "tooltip"
  - img "4K":
    - paragraph: 4K
  - img "Lecture":
    - paragraph: Lecture
  - text: 23 chapters
  - button "Intro | Course Preview | JavaScript Intro | Variables | Keywords | Comments | Operators | DataTypes | Functions and Exercise | if else and Exercise | For Loop | Dom Manipulation | Dom Events and Exercise | Random Numbers | DOM Style Manipulation | Task1 | Task2 | Task3 | Task4 | Task5 | Todo List | Booksky Project | End"
  - button "More"
  - heading "Popular in Visakhapatnam" [level=2]
  - heading "Top 30 JavaScript Interview Questions 2025 | JavaScript Interview Questions & Answers | Intellipaat" [level=3]:
    - link "Top 30 JavaScript Interview Questions 2025 | JavaScript Interview Questions & Answers | Intellipaat":
      - /url: /watch?v=MX48mv73jf8&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 104K views •4 months ago
  - link "Go to channel":
    - /url: /@Intellipaat
  - link "Intellipaat":
    - /url: /@Intellipaat
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: "#JavaScriptInterviewQuestions2025 #JavaScriptInterviewQuestions #JavaScriptInterviewQuestionsAndAnswers ..."
  - tooltip "tooltip"
  - img "4K":
    - paragraph: 4K
  - text: 31 chapters
  - button
  - button "More"
  - heading "Javascript in 1 shot in Hindi | part 1" [level=3]:
    - link "Javascript in 1 shot in Hindi | part 1":
      - /url: /watch?v=sscX432bMZo&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 1.4M views •1 year ago
  - link "Go to channel":
    - /url: /@chaiaurcode
  - link "Chai aur Code":
    - /url: /@chaiaurcode
  - tooltip "tooltip"
  - text: Visit https://chaicode.com for all related materials, community help, source code etc. 00:00:00 - Javascript for beginners 00:05:04 ...
  - tooltip "tooltip"
  - img "4K":
    - paragraph: 4K
  - text: 30 chapters
  - button "Javascript for beginners | Setting up environment | Save and work on GitHub | Let const var | Datatypes and ECMA standards | Datatyope conversion confusion | Why string to number | comparison of datatypes | datatypes summary | stack and heap memory | String in javascript | Number and maths | date and time | Array in javascript | Array part 2 | Objects in depth | Objects part 2 | Objects destructuring and JSON API | Functions and parameters | functions with objects | Global and local scope | Scope level and mini hoisting | this and arrow function | Immediately invoked function | How does javascript works behind the scene | Control flow in javascript | for loop break and continue | while do while loop | High order array loops | filter map and reduce"
  - button "More"
  - heading "Learn JavaScript - Full Course for Beginners" [level=3]:
    - link "Learn JavaScript - Full Course for Beginners":
      - /url: /watch?v=PkZNo7MFNFg&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 19M views •6 years ago
  - link "Go to channel":
    - /url: /@freecodecamp
  - link "freeCodeCamp.org":
    - /url: /@freecodecamp
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...
  - tooltip "tooltip"
  - img "Closed captions":
    - paragraph: CC
  - text: 100 chapters
  - button
  - button "More"
  - heading "Build Ecommerce Website With HTML CSS JavaScript | Full Responsive Ecommerce" [level=3]:
    - link "Build Ecommerce Website With HTML CSS JavaScript | Full Responsive Ecommerce":
      - /url: /watch?v=NvJzKlK2Asw&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 446 views •2 days ago
  - link "Go to channel":
    - /url: /@MsoftTech
  - link "M - SoftTech":
    - /url: /@MsoftTech
  - tooltip "tooltip"
  - text: LEARN HOW TO BUILD FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML ...
  - tooltip "tooltip"
  - img "New":
    - paragraph: New
  - link:
    - /url: /@javascriptmastery
  - link "JavaScript Mastery tooltip Verified @javascriptmastery•1.09M subscribers Master modern web development with a project-based approach.":
    - /url: /@javascriptmastery
    - text: JavaScript Mastery
    - tooltip "tooltip"
    - img "Verified":
      - paragraph
      - tooltip "tooltip"
    - text: "@javascriptmastery•1.09M subscribers Master modern web development with a project-based approach."
  - link "Subscribe":
    - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252Fresults%253Fsearch_query%253DJava%252BScript%26continue_action%3DQUFFLUhqbFU2VUJQNDZDUkhJbl95TzRyUWhqQ1I3NVVrZ3xBQ3Jtc0tseXg5RVZmTEJlazJDeVJMM1hzY0lCdWF2SVgzX2xDU1Q1MTFreGhCMHpuSURzSzRycktUMjBzZUFNNlpXRUNCcmo3MEczU3pVNjlzckY0RkhvWVFPam90YmZ0b1JiNGxnQ05ESVVlNDJuMDRvRGZiY2pUZlNzVGY2T2RUZDIxanlPTi03bV91RzNpa0M4NUJ6dEQ1VGNLb1ZOc1VyTTN5elJzbkZWTDFlcU9CNTluNXd4VHVxcTF1Zk1US2hUc2dZeG5iZDM&hl=en
  - heading "Channels new to you" [level=2]
  - heading "I Mastered JavaScript in 30 days, and You Can TOO 😱" [level=3]:
    - link "I Mastered JavaScript in 30 days, and You Can TOO 😱":
      - /url: /watch?v=kn_WIkDeFKg&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 5K views •2 months ago
  - link "Go to channel":
    - /url: /@engineerchirag
  - link "Chirag Goel":
    - /url: /@engineerchirag
  - tooltip "tooltip"
  - text: Master JavaScript in Just 30 Days! Struggling to learn JavaScript? Feeling lost with too much content and no clear roadmap?
  - tooltip "tooltip"
  - heading "#01 JavaScript Introduction - Learn JavaScript Basics for Beginners [2025 Guide]" [level=3]:
    - link "#01 JavaScript Introduction - Learn JavaScript Basics for Beginners [2025 Guide]":
      - /url: /watch?v=ba_JmbPjGCc&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 51 views •2 days ago
  - link "Go to channel":
    - /url: /@WebTechKnowledge
  - link "Web Tech Knowledge":
    - /url: /@WebTechKnowledge
  - tooltip "tooltip"
  - text: "Thanks For Watching. I can Make Website for you : My Email : yaminshakil7@gmail.com Website Address : https://unipexel.com/ ..."
  - tooltip "tooltip"
  - img "New":
    - paragraph: New
  - heading "🔥Stop Forgetting JavaScript Answers in Interviews! Anki Flashcards Hack" [level=3]:
    - link "🔥Stop Forgetting JavaScript Answers in Interviews! Anki Flashcards Hack":
      - /url: /watch?v=PpJu4A7PQyI&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 2.1K views •1 month ago
  - link "Go to channel":
    - /url: /@interviewhappy
  - link "Interview Happy":
    - /url: /@interviewhappy
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Forgetting Answers in JavaScript Interviews? Never struggle again! Master JavaScript Interview Answers with Anki Flashcards!
  - tooltip "tooltip"
  - text: +5 more
  - heading "JavaScript Course for Beginners" [level=3]:
    - link "JavaScript Course for Beginners":
      - /url: /watch?v=Zi-Q0t4gMC8&pp=ygULSmF2YSBTY3JpcHTSBwkJhAkBhyohjO8%3D
  - button "Action menu"
  - text: 619K views •11 months ago
  - link "Go to channel":
    - /url: /@freecodecamp
  - link "freeCodeCamp.org":
    - /url: /@freecodecamp
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Learn how to use the JavaScript programming language. This beginner's tutorial will teach you all the basics of JavaScript and ...
  - tooltip "tooltip"
  - text: 76 chapters
  - button
  - button "More"
  - heading "JavaScript Course for Beginners – Your First Step to Web Development" [level=3]:
    - link "JavaScript Course for Beginners – Your First Step to Web Development":
      - /url: /watch?v=W6NZfCO5SIk&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 13M views •7 years ago
  - link "Go to channel":
    - /url: /@programmingwithmosh
  - link "Programming with Mosh":
    - /url: /@programmingwithmosh
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Learn JavaScript basics with this quick, beginner-friendly course! ⚡ Perfect for new coders ready to build real skills and start ...
  - tooltip "tooltip"
  - img "Closed captions":
    - paragraph: CC
  - text: 13 chapters
  - button "What is JavaScript | Setting Up the Development Environment | JavaScript in Browsers | Separation of Concerns | JavaScript in Node | Variables | Constants | Primitive Types | Dynamic Typing | Objects | Arrays | Functions | Types of Functions"
  - button "More"
  - heading "People also search for" [level=2]
  - link "Python":
    - /url: /results?search_query=Python&sp=EhWSARIKCC9tLzA1ejFfKgZQeXRob254AQ%253D%253D
  - link "CSS":
    - /url: /results?search_query=CSS&sp=EhOSARAKCS9tLzAxNXRqaCoDQ1NTeAE%253D
  - link "TypeScript":
    - /url: /results?search_query=TypeScript&sp=EhuSARgKCi9tLzBuNTBoeHYqClR5cGVTY3JpcHR4AQ%253D%253D
  - link "C++":
    - /url: /results?search_query=C%2B%2B&sp=EhKSAQ8KCC9tLzBqZ3FnKgNDKyt4AQ%253D%253D
  - link "Rust":
    - /url: /results?search_query=Rust+%28programming+language%29&sp=EiySASkKCi9tLzBkc2JwZzYqG1J1c3QgKHByb2dyYW1taW5nIGxhbmd1YWdlKXgB
  - link "PHP":
    - /url: /results?search_query=PHP&sp=EhKSAQ8KCC9tLzA2MGt2KgNQSFB4AQ%253D%253D
  - link "SQL":
    - /url: /results?search_query=SQL&sp=EhKSAQ8KCC9tLzA3NXN0KgNTUUx4AQ%253D%253D
  - link "C#":
    - /url: /results?search_query=C%23&sp=EhKSAQ8KCS9tLzA3NjU3ayoCQyN4AQ%253D%253D
  - link "HTML5":
    - /url: /results?search_query=HTML5&sp=EhaSARMKCi9tLzAycGQyNngqBUhUTUw1eAE%253D
  - link "Scratch":
    - /url: /results?search_query=Scratch&sp=EhiSARUKCi9tLzAyODE2N2YqB1NjcmF0Y2h4AQ%253D%253D
  - button
  - heading "JavaScript Full Course for free 🌐 (2024)" [level=3]:
    - link "JavaScript Full Course for free 🌐 (2024)":
      - /url: /watch?v=lfmg-EJ8gm4&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 3.3M views •1 year ago
  - link "Go to channel":
    - /url: /@BroCodez
  - link "Bro Code":
    - /url: /@BroCodez
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: "javascript #tutorial #course ⭐Time Stamps⭐ #1 00:00:00 JavaScript tutorial for beginners #2 00:12:32 Variables #3 ..."
  - tooltip "tooltip"
  - text: 75 chapters
  - button
  - button "More"
  - heading "JavaScript | Beginning to Mastery Complete Tutorial (Part 1)" [level=3]:
    - link "JavaScript | Beginning to Mastery Complete Tutorial (Part 1)":
      - /url: /watch?v=chx9Rs41W6g&pp=ygULSmF2YSBTY3JpcHTSBwkJhAkBhyohjO8%3D
  - button "Action menu"
  - text: 2.4M views •3 years ago
  - link "Go to channel":
    - /url: /@Harshitvashisth
  - link "Harshit vashisth":
    - /url: /@Harshitvashisth
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...
  - tooltip "tooltip"
  - text: 94 chapters
  - button
  - button "More"
  - heading "From related searches" [level=2]
  - heading "Complete C++ Tutorial in One Shot 2023 | Beginner To Advance | Basics Of C++ Programming" [level=3]:
    - link "Complete C++ Tutorial in One Shot 2023 | Beginner To Advance | Basics Of C++ Programming":
      - /url: /watch?v=e7sAf4SbS_g&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 3.3M views •1 year ago
  - link "Go to channel":
    - /url: /@CollegeWallahbyPW
  - link "College Wallah":
    - /url: /@CollegeWallahbyPW
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Would you like to learn all about the basics of the C++ language? In this one-shot course, we'll start from the very basics and work ...
  - tooltip "tooltip"
  - text: 12 chapters
  - button "Introduction | Online compiler - Replit | Basics | Conditionals | Loops | Pattern Printing | Functions | Pointers | Recursion | Arrays | 2D Arrays | Strings"
  - button "More"
  - heading "Learn TypeScript – Full Tutorial" [level=3]:
    - link "Learn TypeScript – Full Tutorial":
      - /url: /watch?v=30LWjhZzg50&pp=ygULSmF2YSBTY3JpcHTSBwkJhAkBhyohjO8%3D
  - button "Action menu"
  - text: 1.3M views •2 years ago
  - link "Go to channel":
    - /url: /@freecodecamp
  - link "freeCodeCamp.org":
    - /url: /@freecodecamp
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Learn how to program with TypeScript in this full course for beginners. TypeScript is a typed superset of JavaScript that compiles ...
  - tooltip "tooltip"
  - img "4K":
    - paragraph: 4K
  - img "Closed captions":
    - paragraph: CC
  - text: 32 chapters
  - button "Why to learn TypeScript | TypeScript is not what you think | How to install TypeScript | Your first intro to TypeScript docs | Number, boolean, and type inference | Don't use ANY | Do you really know functions | A better way to write function | Bad behavior of objects | Type Aliases | READONLY and optional | Array | Union Types in TS | Tuples | Enums | interface | Interface vs Type | How to setup Typescript for real projects | Classes | Private Public | Getters and Setters | Protected | Why Interface is important | Abstract class | Generics | Generics in Array and Arrow functions | Generic Classes | Type Narrowing | The in operator narrowing | Instanceof and Type Predicates | Discriminated Union and Exhaustiveness Checking with never | TypeScript End"
  - button "More"
  - heading "CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code" [level=3]:
    - link "CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code":
      - /url: /watch?v=ESnrn1kAD4E&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 11M views •1 year ago
  - link "Go to channel":
    - /url: /@ApnaCollegeOfficial
  - link "Apna College":
    - /url: /@ApnaCollegeOfficial
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Early bird offer for first 5000 students only! International Student (payment link) - https://buy.stripe.com/7sI00cdru0tg10saEQ ...
  - tooltip "tooltip"
  - heading "JavaScript Full Course in Telugu | 30 Hours Complete JavaScript Tutorial for Beginners & Experts" [level=3]:
    - link "JavaScript Full Course in Telugu | 30 Hours Complete JavaScript Tutorial for Beginners & Experts":
      - /url: /watch?v=n87Hns72pBM&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 159K views •2 months ago
  - link "Go to channel":
    - /url: /@suresh-techs
  - link "Suresh techs":
    - /url: /@suresh-techs
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: Chapters ========== 0:00 - Introduction 1:18 - Why should I learn JavaScript? 7:38 - What is JavaScript? What can we do with it ...
  - tooltip "tooltip"
  - heading "JavaScript for Beginners | Learn JavaScript in one hour!" [level=3]:
    - link "JavaScript for Beginners | Learn JavaScript in one hour!":
      - /url: /watch?v=e2fKYP_7B_Y&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 103K views •1 year ago
  - link "Go to channel":
    - /url: /@KeertiPurswani
  - link "Keerti Purswani":
    - /url: /@KeertiPurswani
  - tooltip "tooltip"
  - text: This video will truly take you from Zero to Hero, just look at the timestamps and you will know that it covers the most important ...
  - tooltip "tooltip"
  - img "4K":
    - paragraph: 4K
  - text: 26 chapters
  - button "Intro | JS Intro | Execute JS code in browser | NodeJS Intro, how to execute JS code using NodeJS | JS code in HTML | Primitive/Value Types | Objects | Value Types Vs Reference Types | Arrays | Functions | How JS is executed, Execution context, Hoisting | window and this | let, const, Temporal Dead Zone, Block Scoping | Lexical Scope | Higher Order Functions, First Class Citizens | Arrow Functions | Closures with examples | Revision | 1:16-10 - Callback, event loop, event queue | Callback hell, Pyramid of Doom | Promises | async await | motivation | map | filter | reduce"
  - button "More"
  - heading "JavaScript Crash Course For Beginners" [level=3]:
    - link "JavaScript Crash Course For Beginners":
      - /url: /watch?v=hdI2bqOjy3c&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 4.2M views •6 years ago
  - link "Go to channel":
    - /url: /@TraversyMedia
  - link "Traversy Media":
    - /url: /@TraversyMedia
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...
  - tooltip "tooltip"
  - text: 5 moments
  - button "WHAT IS JAVASCRIPT? | WHY LEARN JAVASCRIPT? | WHAT YOU WILL LEARN IN THIS COURSE | FURTHER LEARNING | JAVASCRIPT CRASH COURSE"
  - button "More"
  - heading "JavaScript Programming Tutorial for Beginners" [level=3]:
    - link "JavaScript Programming Tutorial for Beginners":
      - /url: /watch?v=IC5vBKc21X8&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 376K views •2 years ago
  - link "Go to channel":
    - /url: /@Telusko
  - link "Telusko":
    - /url: /@Telusko
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: 00:00:00 - intro 00:06:01 - Getting started 00:15:51 - NodeJS, VS Code Installation 00:22:00 - Variables in JavaScript 00:38:13 ...
  - tooltip "tooltip"
  - text: 41 chapters
  - button
  - button "More"
  - heading "How To Master JavaScript by ThePrimeagen 1,050,597 views 10 months ago 28 seconds - play Short" [level=3]:
    - link "How To Master JavaScript by ThePrimeagen 1,050,597 views 10 months ago 28 seconds - play Short":
      - /url: /shorts/I5_Gx3JNho8
      - text: How To Master JavaScript
  - button "Action menu"
  - text: 1M views •10 months ago
  - link "Go to channel":
    - /url: /@ThePrimeagen
  - link "ThePrimeagen":
    - /url: /@ThePrimeagen
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: "#coding #neovim #typescript #programming #vim #softwareengineering #codinglife #webdesign #webdevelopment #webdev ..."
  - tooltip "tooltip"
  - heading "JavaScript Tutorial In Hindi" [level=3]:
    - link "JavaScript Tutorial In Hindi":
      - /url: /watch?v=hKB-YGF14SY&pp=ygULSmF2YSBTY3JpcHQ%3D
  - button "Action menu"
  - text: 7.1M views •4 years ago
  - link "Go to channel":
    - /url: /@CodeWithHarry
  - link "CodeWithHarry":
    - /url: /@CodeWithHarry
  - tooltip "tooltip"
  - img "Verified":
    - paragraph
    - tooltip "tooltip"
  - text: 00:00 – Video Introduction 01:10 – JavaScript Introduction 02:43 – Basics of JavaScript 04:55 – Coding First Line of JavaScript ...
  - tooltip "tooltip"
  - img "Closed captions":
    - paragraph: CC
  - text: 33 chapters
  - button
  - button "More"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | import td from '../../TestData/QA/td.json'
   4 |
   5 | //defining structure for type safety
   6 | type TestData = {
   7 |     TestDataSet1: {
   8 |         Skill1: string,
   9 |         Skill2: string
  10 |     },
  11 |     TestDataSet2: {
  12 |         Skill1: string,
  13 |         Skill2: string
  14 |     }
  15 | }
  16 |
  17 | const typedTestData = td as TestData;
  18 |
  19 | for (const dataSetName in typedTestData) {
  20 |     const skill = typedTestData[dataSetName as keyof TestData];
  21 |
  22 |     test(`test Data Driven using JSON :  ${skill.Skill1} `, async ({ page }) => {
  23 |         await page.goto('https://www.youtube.com/');
  24 |         await page.getByRole('combobox', { name: 'Search' }).click();
  25 |         await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
  26 |         await page.getByRole('button', { name: 'Search', exact: true }).click();
> 27 |         await expect(page.locator('#channel-title')).toContainText('Playwright');
     |                                                      ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  28 |     });
  29 |
  30 | }
  31 |
  32 |
  33 |
```