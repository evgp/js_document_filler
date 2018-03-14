     //<![CDATA[ //
	   var litca = new Array(),
		   hotels = new Array(), 
		   progs = new Array(),
		   flights = new Array(), 
		   hotelRoom = "", hotelFood = "";
	   function translit(text){
         var transl=new Array();
		 transl['А']='A';     transl['а']='a';
		 transl['Б']='B';     transl['б']='b';
		 transl['В']='V';     transl['в']='v';
		 transl['Г']='G';     transl['г']='g';
		 transl['Д']='D';     transl['д']='d';
		 transl['Е']='E';     transl['е']='e';
		 transl['Ё']='Yo';    transl['ё']='yo';
		 transl['Ж']='Zh';    transl['ж']='zh';
		 transl['З']='Z';     transl['з']='z';
		 transl['И']='I';     transl['и']='i';
		 transl['Й']='J';     transl['й']='j';
		 transl['К']='K';     transl['к']='k';
		 transl['Л']='L';     transl['л']='l';
		 transl['М']='M';     transl['м']='m';
		 transl['Н']='N';     transl['н']='n';
		 transl['О']='O';     transl['о']='o';
		 transl['П']='P';     transl['п']='p';
		 transl['Р']='R';     transl['р']='r';
		 transl['С']='S';     transl['с']='s';
		 transl['Т']='T';     transl['т']='t';
		 transl['У']='U';     transl['у']='u';
		 transl['Ф']='F';     transl['ф']='f';
		 transl['Х']='Kh';    transl['х']='kh';
		 transl['Ц']='Tc';    transl['ц']='tc';
		 transl['Ч']='Ch';    transl['ч']='ch';
		 transl['Ш']='Sh';    transl['ш']='sh';
		 transl['Щ']='Shch';  transl['щ']='shch';
		 transl['Ъ']='"';     transl['ъ']='"';
		 transl['Ы']='Y';     transl['ы']='y';
		 transl['Ь']='\'';    transl['ь']='\'';
		 transl['Э']='E';     transl['э']='e';
		 transl['Ю']='Iu';    transl['ю']='iu';
		 transl['Я']='Ia';    transl['я']='ia';

		 var result='';
         for(i=0;i<text.length;i++) {
             if(transl[text[i]]!=undefined) { result+=transl[text[i]]; }
             else { result+=text[i]; }
            }
			return result;
		}

	   function do_translit() {
		 document.getElementsByName("zTourisName")[0].value = translit(document.getElementsByName("tourisName")[0].value);
		 document.getElementsByName("zTourisName")[1].value = translit(document.getElementsByName("tourisName")[1].value);
		 }

	   function divider_finder(a, x) {
		 var results = [],
             len = a.length, pos = 0;
			while(pos < len) { 
				pos = a.indexOf(x, pos);
				if (pos === -1) break;
			    results.push(pos);
				pos = pos + 1;
			    }
			return results;
	   }
		 
	   function fillDocument() {
	    var person1 = "", filler = "", dogNum = document.getElementsByName("dogNum")[0].value, dogDate = document.getElementsByName("signDate")[0].value;
	     document.getElementById("dogDate").innerHTML = dogDate;
	     document.getElementById("dogNumber").innerHTML = dogNum; 
		 var divIndex = divider_finder(litca[0], "|");
		 
  		    for (a=0;a<divIndex[0];a++) {
			 person1 += litca[0][a];
			}
         person1 += " ";
  		    for (a=divIndex[0]+1;a<divIndex[1];a++) {
			 person1 += litca[0][a];
			}
         person1 += " ";
  		    for (a=divIndex[1]+1;a<divIndex[2];a++) {
			 person1 += litca[0][a];
			}
		 document.getElementById("dog1Touris1").innerHTML = person1; 
		 document.getElementById("dog1Touris2").innerHTML = person1; 
		 document.getElementById("dog1Touris3").innerHTML = person1; 
  		    for (a=divIndex[5]+1;a<divIndex[6];a++) {
			 filler += litca[0][a];
			}
		  document.getElementById("dog1TourisPassport").innerHTML = filler; 
		  filler = "";
  		    for (a=divIndex[6]+1;a<divIndex[7];a++) {
			 filler += litca[0][a];
			}
			filler += ", ";
  		    for (a=divIndex[7]+1;a<divIndex[8];a++) {
			 filler += litca[0][a];
			}			
		  document.getElementById("dog1TourisPassportIssue").innerHTML = filler; 		 
		  filler = "";
 		    for (a=divIndex[11]+1;a<divIndex[12];a++) {
			 filler += litca[0][a];
			}			
		  document.getElementById("dog1TourisPassportAddress").innerHTML = filler; 		 
		  filler = "";
		    for (a=divIndex[12]+1;a<litca[0].length;a++) {
			 filler += litca[0][a];
			}			
		  document.getElementById("dog1TourisTel").innerHTML = filler; 		 
		  filler = "";
        //заполняем френдов в реквизитах и согласия   
			for (i=1;i<litca.length;i++) {
				divIndex = divider_finder(litca[i], "|");
		 
  		        for (a=0;a<divIndex[0];a++) {
    			 filler += litca[i][a];
			    }
                filler += " ";
  		        for (a=divIndex[0]+1;a<divIndex[1];a++) {
		  	     filler += litca[i][a];
			    }
                filler += " ";
  		        for (a=divIndex[1]+1;a<divIndex[2];a++) {
		     	 filler += litca[i][a];
			    }
				if (i!=litca.length-1) { filler += ", "};
			document.getElementById("friends").innerHTML += filler;
				 filler = ""; 
		    }
		var fio = "", dob = "", pass = "", passIssue = "", address = "";	
			for (i=0; i<litca.length; i++) {
				divIndex = divider_finder(litca[i], "|");
				
 		        for (a=0;a<divIndex[0];a++) {
    			 fio += litca[i][a];
			    }
                fio += " ";
  		        for (a=divIndex[0]+1;a<divIndex[1];a++) {
		  	     fio += litca[i][a];
			    }
                fio += " ";
  		        for (a=divIndex[1]+1;a<divIndex[2];a++) {
		     	 fio += litca[i][a];
			    }
				
  		        for (a=divIndex[2]+1;a<divIndex[3];a++) {
		     	 dob += litca[i][a];
			    }
				
  		        for (a=divIndex[5]+1;a<divIndex[6];a++) {
		     	 pass += litca[i][a];
			    }

  		        for (a=divIndex[7]+1;a<divIndex[8];a++) {
		     	 passIssue += litca[i][a];
			    }

  		        for (a=divIndex[11]+1;a<divIndex[12];a++) {
		     	 address += litca[i][a];
			    }
			add_soglasie(dogNum, dogDate, fio, dob, pass, passIssue, address);
			fio = "";
			dob = "";
			pass = "";
			passIssue = "";
			address = "";
			}
        //заполняем приложение 2
		var zFName = "", zName = "", zpass = "", zPassF = "", zPassT = "";
			for (i=0; i<litca.length; i++) {
				divIndex = divider_finder(litca[i], "|");

 		        for (a=divIndex[3]+1;a<divIndex[4];a++) {
    			 zFName += litca[i][a];
			    }
           
  		        for (a=divIndex[4]+1;a<divIndex[5];a++) {
		  	     zName += litca[i][a];
			    }

  		        for (a=divIndex[2]+1;a<divIndex[3];a++) {
		  	     dob += litca[i][a];
			    }
				
  		        for (a=divIndex[8]+1;a<divIndex[9];a++) {
		     	 zpass += litca[i][a];
			    }
				
  		        for (a=divIndex[9]+1;a<divIndex[10];a++) {
		     	 zPassF += litca[i][a];
			    }
				
  		        for (a=divIndex[10]+1;a<divIndex[11];a++) {
		     	 zPassT += litca[i][a];
			    }
            indexC = i + 1;
			$('#tableTourisInfo').append('<tr><td>' + indexC +'</td><td>' +zFName+'</td><td>'+zName+'</td><td>'+dob+'</td><td>'+zpass+'</td><td>'+zPassF+'</td><td>'+zPassT+'</td></tr>');	
				zFName = "";
				zName = "";
				dob = "";
				zpass = "";
				zPassF = "";
				zPassT = "";			 
			}
			var prDate = "", prData = "";
			for (i=0; i<progs.length; i++) {
				divIndex = divider_finder(progs[i], "|");
				
 		        for (a=0;a<divIndex[0];a++) {
    			 prDate += progs[i][a];
			    }				

 		        for (a=divIndex[0]+1;a<progs[i].length;a++) {
    			 prData += progs[i][a];
			    }				
				$('#tableTourisProgram').append('<tr><td>' + prDate +'</td><td>' +prData+'</td></tr>');
				prDate = "";
				prData = "";	
			}
			
			var h = "", hci = "", hco = "", hr = "", hf = "";
			for (i=0; i<hotels.length; i++) {
				divIndex = divider_finder(hotels[i], "|");			
				
 		        for (a=0;a<divIndex[0];a++) {
    			 h += hotels[i][a];
			    }

 		        for (a=divIndex[0]+1;a<divIndex[1];a++) {
    			 hci += hotels[i][a];
			    }

 		        for (a=divIndex[1]+1;a<divIndex[2];a++) {
    			 hco += hotels[i][a];
			    }

 		        for (a=divIndex[2]+1;a<divIndex[3];a++) {
    			 hr += hotels[i][a];
			    }

 		        for (a=divIndex[3]+1;a<hotels[i].length;a++) {
    			 hf += hotels[i][a];
			    }
				
				$('#tableTourisHotel').append('<tr><td>' + h +'</td><td>' +hci+'</td><td>' +hco+'</td><td>' +hr+'</td><td>' +hf+'</td></tr>');				
				
				h = "";
				hci = "";
				hco = "";
				hr = "";
				hf = "";
			}
			
			var fn = "", fr = "", fc = "", fd = "", fdt = "", fat = "", ap = "";
			for (i=0; i<flights.length; i++) {
				divIndex = divider_finder(flights[i], "|");			

 		        for (a=0;a<divIndex[0];a++) {
    			 fn += flights[i][a];
			    }

 		        for (a=divIndex[0]+1;a<divIndex[1];a++) {
    			 fr += flights[i][a];
			    }

 		        for (a=divIndex[1]+1;a<divIndex[2];a++) {
    			 fc += flights[i][a];
			    }

 		        for (a=divIndex[2]+1;a<divIndex[3];a++) {
    			 fd += flights[i][a];
			    }

 		        for (a=divIndex[3]+1;a<divIndex[4];a++) {
    			 fdt += flights[i][a];
			    }

 		        for (a=divIndex[4]+1;a<divIndex[5];a++) {
    			 fat += flights[i][a];
			    }
				
		        for (a=divIndex[5]+1;a<flights[i].length;a++) {
    			 ap += flights[i][a];
			    }

				$('#tableTourisFlight').append('<tr><td>' + fn +'</td><td>' +fr+'</td><td>' +fc+'</td><td>' +fd+'</td><td>' +fdt+'</td><td>' +fat+'</td><td>' +ap+'</td></tr>');
				
				fn = ""; fr = ""; fc = ""; fd = ""; fdt = ""; fat = ""; ap = "";
				
			}
			
			document.getElementById("visaUslig").innerHTML = document.getElementsByName("visaSupport")[0].value;
			document.getElementById("guideUslig").innerHTML = document.getElementsByName("guideSupport")[0].value;
			
			$('#tableTourisInsure').append('<tr><td>Страхование медицинских расходов в период путешествия*</td><td>' +document.getElementsByName("insuraSupport")[0].value+'</td><td>' +document.getElementById("chooseSureFranshure").value+'</td></tr>');
			
			$('#tableTourisMoney').append('<tr><td>' +document.getElementsByName("tourPayment")[0].value+'</td><td>' +document.getElementsByName("tourPayment")[1].value+'</td><td>' +document.getElementsByName("tourPayment")[2].value+'</td></tr>');
			
			show_document();
		 }
		 
		 
		 
//формирователь приложения 3
	   function add_soglasie(dogNum, dogDate, fio, dob, pass, passIssue, address) {
	    var myDoc = document.getElementById("myDocument"),
			elDiv = document.createElement("div");
			elDiv.innerHTML = "<p><h1>ПРИЛОЖЕНИЕ №3</h1></p>\
				<p style=\"text-align: center;\">к ДОГОВОРУ № " + dogNum + " от " + dogDate + "</p>\
				<p class=\"majorText\" style=\"text-align: center;\">ПИСЬМЕННОЕ СОГЛАСИЕ ТУРИСТА</p>\
				<p class=\"majorText\">Я, именуемый в Договоре на оказание туристических услуг как ТУРИСТ:</p>\
				<p class=\"majorText\">Ф.И.О. полностью: " + fio + "</p>\
				<p class=\"majorText\">Дата, месяц, год рождения: " + dob + "</p>\
				<p class=\"majorText\">Серия,  №   паспорта: " + pass + "</p>\
				<p class=\"majorText\">Кем и когда выдан паспорт: " + passIssue + "</p>\
				<p class=\"majorText\">Зарегистрированный по адресу: " + address + "</p>\
				<p class=\"majorText\">в соответствии с Федеральным законом от 27.07.2006 года № 152-ФЗ «О персональных данных»</p>\
				<p class=\"majorText\">даю своей волей письменное согласие считать на срок действия Договора на оказание туристических услуг мои персональные данные - 	общедоступными персональными данными.</p>\
				<p class=\"majorText\">В интересах исполнения Договора к моим общедоступным персональным данным относятся только следующие:</p> \
				<p class=\"majorText\">- фамилия, имя, отчество; адрес регистрации; номер паспорта, удостоверяющего мою личность, сведения о дате выдачи и выдавшем паспорт органе; год, месяц, день рождения; пол; гражданство.</p> \
				<p class=\"majorText\">В целях исполнения Договора к моим общедоступным персональным данным, на обработку которых я даю согласие, могут иметь доступ неограниченный круг лиц.</p>\
				<p class=\"majorText\">Я осведомлен и согласен, что мои общедоступные данные могут ТУРОПЕРАТОРОМ (Обществом с ограниченной ответственностью Туристическая компания «Камчатинтур», ИНН: 4100000210) обрабатываться в моих интересах методом смешанной (в том числе автоматизированной) обработки, систематизироваться, храниться, распространяться и передаваться с использованием сети общего пользования Интернет третьим лицам.</p>\
				<p class=\"majorText\">Настоящее согласие мною дается на срок действия Договора на оказание туристических услуг.</p>\
				<p class=\"majorText\">Настоящее согласие считается отозванным в случае досрочного расторжения Договора по любой причине.</p>\
				<p class=\"majorText\">Настоящим согласием Я обязываю ТУРОПЕРАТОРА после окончания действия Договора или отзыва мною настоящего согласия незамедлительно прекратить обработку моих персональных данных. Он должны уничтожить содержание моих персональных данных в информационной системе и на материальных носителях в срок, не превышающий трех рабочих дней со дня окончания срока исковой давности по Договору на оказание туристических услуг, а если для документов, содержащих мои персональные данные, законодательством установлен срок их хранения, то в срок, не превышающий трех рабочих дней со дня окончания срока их хранения, установленного законом. ТУРОПЕРАТОР должен обязать к данным действиям и всех третьих лиц, которым передавались мои персональные данные. Я согласен, чтобы дополнительного уведомления об этих обстоятельствах мне не направлялось.</p>\
				<p><table style=\"width: 100%;\">\
				<tr>\
				<td style=\"width: 50%;\"><p style=\"text-align: left; padding-top: 20px;\">__________________________________</p></td>\
				<td style=\"width: 50%;\"><p style=\"text-align: right; padding-top: 20px;\">__________________________________</p></td>\
				</tr>\
				<tr>\
				<td style=\"width: 50%;\"><p style=\"text-align: left;\">(собственноручная подпись Туриста)</p></td>\
				<td style=\"width: 50%;\"><p style=\"text-align: right;\">(Ф.И.О. Туриста)</p></td>\
				</tr>\
				<tr>\
				<td style=\"width: 50%;\"><p style=\"text-align: left; padding-top: 20px;\">«___» ___________ 2014 года</p></td>\
				<td style=\"width: 50%;\"><p style=\"text-align: right;\"></p></td>\
				</tr>\
				</table></p>\
				<table class=\"page_footer\"></table>\
				</div></body></html>";		
			myDoc.appendChild(elDiv);
	   }
		 
	   function add_touris() {
		  var tName = document.getElementsByName("tourisName");
		  var zTName = document.getElementsByName("zTourisName"), 
		  ztDOB = document.getElementsByName("tourisDOB")[0].value,
		  tPass = document.getElementsByName("passSerial")[0].value + " " + document.getElementsByName("passNumber")[0].value;
		  tPassDate = document.getElementsByName("passDate")[0].value;
		  tPassIssue = document.getElementsByName("passIssue")[0].value;
		  tAddress = document.getElementsByName("tourisZipcode")[0].value + ", " +document.getElementsByName("tourisCity")[0].value + ", " + document.getElementsByName("tourisStreet")[0].value + ", " + document.getElementsByName("tourisBuilding")[0].value;
		  tTel = document.getElementsByName("tourisPhone")[0].value;
		  zPass = document.getElementsByName("zPassSerial")[0].value + " " + document.getElementsByName("zPassNumber")[0].value, 
		  zPDateF = document.getElementsByName("zPassDateFrom")[0].value, 
		  zPDateT = document.getElementsByName("zPassDateTo")[0].value;

		  litca.push(tName[0].value + "|" +
					 tName[1].value + "|" +
					 tName[2].value + "|" +
					 ztDOB + "|" +
					 zTName[0].value + "|" +
					 zTName[1].value + "|" +
					 tPass + "|" +
					 tPassDate + "|" +
					 tPassIssue + "|" +
					 zPass + "|" +
					 zPDateF + "|" +
					 zPDateT + "|" +
					 tAddress + "|" +
					 tTel);
		  list_touris();
	     }
		 
		function array_delete() {
		 litca.length = 0;
		 list_touris();
		 document.getElementById("tourisCounter").innerHTML = "Кол-во клиентов: " + litca.length;		 
		}
		
		function prog_delete() {
		 progs.length = 0;
		 document.getElementById("progCounter").innerHTML = "Кол-во пунктов: " + progs.length;
		}
		
	
		function list_touris() {
   	      var gl = document.getElementById("guysList"), 
		      listItem = "", iItem = "|";	
		  gl.innerHTML = "";
		  for (i=0;i<litca.length;i++) {
		    for (a=0;a<litca[i].indexOf(iItem);a++) {
			 listItem += litca[i][a];
			}
			a = litca[i].indexOf(iItem);
			listItem += " " + litca[i][a+1] + ".";
			gl.innerHTML += "<li>"+ listItem + "</li>";
			listItem = "";
		  }
		  document.getElementById("tourisCounter").innerHTML = "Кол-во клиентов: " + litca.length;
		}
		
		function add_program() { 
		 var prDate = document.getElementsByName("progDate")[0].value,
		     prData = document.getElementsByName("progData")[document.getElementsByName("progData").length-1].innerHTML;
			 progs.push(prDate + "|" +
				     prData
					);
			 document.getElementsByName("progDate")[0].value = "";
			 document.getElementsByName("progData")[document.getElementsByName("progData").length-1].innerHTML = "";
			 document.getElementById("progCounter").innerHTML = "Кол-во пунктов: " + progs.length;
		}
		
		function add_hotelFood() {
		 if (hotelFood!="") {
							hotelFood += ", " + document.getElementById("hotelFood").value;
							} else {
							hotelFood = document.getElementById("hotelFood").value;
							};
		}
		
		function add_hotelRoom() {
		 if (hotelRoom!="") {
							hotelRoom += ", " + document.getElementById("hotelNumber").value;
							} else {
							hotelRoom = document.getElementById("hotelNumber").value;
							};
		}
		
		function add_hotels() {
		  var hotel = document.getElementById("hotelChooser").value,
		      hotelCheckIn = document.getElementsByName("hotelDateIn")[0].value,
			  hotelCheckOut = document.getElementsByName("hotelDateIn")[0].value;
			  
			hotels.push(hotel + "|" +
						hotelCheckIn + "|" +
						hotelCheckOut + "|" +
						hotelRoom + "|" +
						hotelFood
						);
			document.getElementById("hotelCounter").innerHTML = "Кол-во пунктов: " + hotels.length;						  
		}
		
		function hotel_delete() {
		 hotels.length = 0;
		 document.getElementById("hotelCounter").innerHTML = "Кол-во пунктов: 0";
		}
		
		function add_flight() {
		 var flightNum = document.getElementById("chooseFlight").value,
		     flightRoute = document.getElementById("chooseTrip").options[document.getElementById("chooseTrip").selectedIndex].text,
			 flightClass = document.getElementById("chooseFlightClass").value,
			 flightDate = document.getElementsByName("flightsDate")[0].value,
			 flightDeptTime = document.getElementsByName("flightsTimeH")[0].value + ":" + document.getElementsByName("flightsTimeM")[0].value,
			 flightArriveTime = document.getElementsByName("flightsTimeH")[1].value + ":" + document.getElementsByName("flightsTimeM")[1].value,
			 flightPort = document.getElementById("chooseTrip").value;
			 
			 flights.push(  flightNum + "|" +
							flightRoute  + "|" +
							flightClass  + "|" +
							flightDate  + "|" +
							flightDeptTime  + "|" +
							flightArriveTime  + "|" +
							flightPort
							);
			 document.getElementById("flightBtn").setAttribute("value", "Сброс? : "+flights.length);
		}
		
		function flight_delete() {
		 flights.length = 0;
		 document.getElementById("flightBtn").setAttribute("value", "маршрут сброшен");
		}
		
		function show_document() {
			$("#topPart").css("display","none");
			$("#myDocument").css("display","block");
			$("#myDocument").animate({
				opacity: 1,
				} , {
				duration: 500
				});		
		}
		
		
		
		
		
		
	 //]]>