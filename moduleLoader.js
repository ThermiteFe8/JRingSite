const myEmail = "thermitefe8@gmail.com"
const defSubject = "Chainmail Purchase For "
var urlHolder;

async function getData(urlName) {
  const url = urlName;
  try {
	  urlHolder=url;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
	jsonInputHandler(json);
  } catch (error) {
    console.error(error.message + url);
  }
}

function jsonInputHandler(jsonInput)
{
	
	
	const centralContent = document.getElementById('centralContent');
	
	const linkModule = jsonInput.linkModule;
	const markdownModule = jsonInput.markdownModule;
	if(linkModule != null)
	{
		if(linkModule.length > 0)
		{
			var infoBoxContainerContainer = document.getElementById('infoBoxHolder');
			if(infoBoxContainerContainer == null)
			{
				infoBoxContainerContainer = document.createElement("div")
				infoBoxContainerContainer.setAttribute('id', 'infoBoxHolder');
			}
			for(let i = 0; i < linkModule.length; i++)
			{
				var infoBoxContainer = document.createElement("div");
				infoBoxContainer.setAttribute('class', 'infoBox'); 
				
				var priceParagraph = document.createElement("div");
				priceParagraph.innerHTML= "$" + linkModule[i].price;
				priceParagraph.setAttribute('class', 'price');
				infoBoxContainer.appendChild(priceParagraph);
				
				var thumbnailContainer = document.createElement("a");
				thumbnailContainer.setAttribute('class', 'thumbnailInfoBox');
				//thumbnailContainer.setAttribute('href', linkModule[i].link);
				
				var thumbnailImg = document.createElement("img");
				thumbnailImg.setAttribute('src', linkModule[i].thumbnail);
				
				thumbnailContainer.appendChild(thumbnailImg);
				infoBoxContainer.appendChild(thumbnailContainer);
				
				var titleContainer = document.createElement("div");
				titleContainer.setAttribute('class', 'titleBoxInfoBox');
				
				var titleText = document.createElement("a");
				titleText.innerHTML = linkModule[i].name;
				
				/*if(linkModule[i].newTab)
				{
					//titleText.setAttribute('onclick', 'window.open(\'' + linkModule[i].link + '\')');
				}
				else
				{
					//titleText.setAttribute('href', linkModule[i].link);
				}*/
								
				titleContainer.appendChild(titleText);
				

				infoBoxContainer.appendChild(titleContainer);
				
				var descriptionText = document.createElement("p");
				descriptionText.setAttribute('class', 'descriptionInfoBox');
				descriptionText.innerHTML = linkModule[i].description;
				
				infoBoxContainer.appendChild(descriptionText);
				
				
				
				var buyButton = document.createElement("button");
				buyButton.setAttribute('class', 'BuyButton');
				buyButton.innerHTML = "Buy Now!";
				
				var buyLink = document.createElement("a");
				buyLink.setAttribute('href', 'mailto:'+myEmail+'?subject='+defSubject+linkModule[i].id+'&body='+linkModule[i].emailBody);
				buyButton.appendChild(buyLink);
				
				infoBoxContainer.appendChild(buyButton);
				
				infoBoxContainerContainer.appendChild(infoBoxContainer);
				
			}
			centralContent.appendChild(infoBoxContainerContainer);
		}
	}
	
	if(markdownModule != null)
	{
		if(markdownModule.length > 0)
		{
			for(let i = 0; i < markdownModule.length; i++)
			{
				var mdContainer = document.createElement("div");
				mdContainer.setAttribute('class', 'markdownContainer');
				
				var mdBlock = document.createElement("md-block");
				mdBlock.setAttribute('src', markdownModule[i].source);
				
				mdContainer.appendChild(mdBlock);
				
				var downloadText = document.createElement("a");
				downloadText.setAttribute('class', 'downloadLink');
				downloadText.innerHTML = markdownModule[i].description;
				downloadText.setAttribute('href', markdownModule[i].download);
				
				
				var downloadImg = document.createElement("img");
				downloadImg.setAttribute('class', 'downloadIcon');
				downloadImg.setAttribute('src', 'downloadIcon.png');
				
				downloadText.appendChild(downloadImg);
				mdContainer.appendChild(downloadText);
				centralContent.appendChild(mdContainer);
				
				
			}
		}
	}
}
