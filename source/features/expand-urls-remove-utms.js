function removeUTMs(url){
  if(url.indexOf('utm') !== -1) {
    return url.replace(/[?&#]utm_.*/,'');
  } else {
    return url;
  }
}

function expandUrl(item) {
	item.attr("href", el.attr('data-expanded-url'));
}


export default function () {
	const urls = $('a[data-expanded-url]');

	for (const el of urls) {
		const expandedUrl = el.getAttribute("data-expanded-url");
		const urlWithOutUtms = removeUTMs(expandedUrl);
		el.setAttribute("href", urlWithOutUtms);
	}
}
