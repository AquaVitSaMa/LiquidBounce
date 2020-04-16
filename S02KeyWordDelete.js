var scriptName = "SpammerDelete";
var scriptVersion = 2.0;
var scriptAuthor = "AquaVit"; 

var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat')
var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var FileWriter = Java.type("java.io.FileWriter");
var BufferedWriter = Java.type("java.io.BufferedWriter");
var Timer = Java.type("java.util.Timer");
var ArrayList = Java.type('java.util.ArrayList');

function readFile(filePath) {
    try {
        var file = new File(filePath);
        var reader = new BufferedReader(new FileReader(file));
        var content = [];
        var line;

        while ((line = reader.readLine()) !== null) {
            content.push(line);
        }

        return content;
    } catch (err) {
        log("Unable to open file!", true);

        throw err;
    }
}

function SpammerDelete() {
    var Group = value.createBoolean("Group", true);
	var Box = value.createBoolean("Box", true);
	var Config = value.createBoolean("Config", true);
	var Free = value.createBoolean("Free", true);
	var Shop = value.createBoolean("Shop", true);
	var Inside = value.createBoolean("Inside", true);
	var PenShen = value.createBoolean("PenShen", true);
	var AutoL = value.createBoolean("AutoL", false);
	var Name = value.createBoolean("Name", true);
	var AutoLBUG = value.createText("NotUse AutoL","SomeBUG in");
	var DIYKeyWord = value.createBoolean("DIYKeyWord", true);
	this.getName = function () {
        return "SpammerDelete";
    };

    this.getDescription = function () {
        return "AquaVit:/";
    };

    this.getCategory = function () {
        return "Fun";
    };
	
    this.onEnable = function () {
		var file = new File(mc.mcDataDir + "/DIYcontent.txt")
		if(file.exists()) {
			chat.print('§c[AquaVit]§a使用.DIYKeyWord <Add> 来设置关键词')
			chat.print('§c[AquaVit]§a暂不支持手动删除关键词请手动到客户端目录DIYcontent.txt删除')
			chat.print('§c[AquaVit]§a设置关键词时务必关闭SpammerDelete选项的DIYKeyWord否则Game会炸')
		} else {
			try{
				file.createNewFile();
				chat.print('§c[AquaVit]§a检测到您第一次用本JS 已经为您创建所需文件')
			    chat.print('§c[AquaVit]§a暂不支持手动删除关键词请手动到客户端目录DIYcontent.txt删除')
			    chat.print('§c[AquaVit]§a设置关键词时务必关闭SpammerDelete选项的DIYKeyWord否则Game会炸')
		    } catch (err) {}
		}
    };

	this.onPacket = function(event) {
	//var arrayList = new ArrayList();
	//var reader = new BufferedReader(new FileReader(mc.mcDataDir + "/DIYcontent.txt"));
	//var line;
	//var Name;
	//while ((line = reader.readLine()) !== null) {
	    
        //arrayList.add(line);
		//var KeyWord = line;
	//}
    var KeyWord = readFile(mc.mcDataDir + "/DIYcontent.txt");
	var packet = event.getPacket();
	if(packet instanceof S02PacketChat) {
		if(DIYKeyWord.get() == true) {
            for (var word in KeyWord) {
                if (packet.getChatComponent().getUnformattedText().toLowerCase().match(KeyWord[word])) {
                    event.cancelEvent();
                    break;
                }
            }	
			}
       	if(Group.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("群")|| packet.getChatComponent().getUnformattedText().contains("链接")) {
                event.cancelEvent();
		        }
            }
       	if(Box.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("工具箱") || packet.getChatComponent().getUnformattedText().contains("盒子")|| packet.getChatComponent().getUnformattedText().contains("Box")) {
                event.cancelEvent();
		        }
            }
       	if(Config.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("配置") || packet.getChatComponent().getUnformattedText().contains("config")) {
                event.cancelEvent();
		        }
            }
       	if(Free.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("免费")) {
                event.cancelEvent();
		        }
            }
       	if(Shop.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("付费") || packet.getChatComponent().getUnformattedText().contains("买") || packet.getChatComponent().getUnformattedText().contains("Pay") || packet.getChatComponent().getUnformattedText().contains("小卖部") || packet.getChatComponent().getUnformattedText().contains("卡网") || packet.getChatComponent().getUnformattedText().contains("卖卡吗") || packet.getChatComponent().getUnformattedText().contains("maikama")){
                event.cancelEvent();
		        }
            }
       	if(Inside.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("内部")) {
                event.cancelEvent();
		        }
            }
       	if(PenShen.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("fw") || packet.getChatComponent().getUnformattedText().contains("废物") || packet.getChatComponent().getUnformattedText().contains("nm") || packet.getChatComponent().getUnformattedText().contains("你妈") || packet.getChatComponent().getUnformattedText().contains("你妈死了") || packet.getChatComponent().getUnformattedText().contains("wnf") || packet.getChatComponent().getUnformattedText().contains("窝囊废") || packet.getChatComponent().getUnformattedText().contains("扣字") || packet.getChatComponent().getUnformattedText().contains("殴打") || packet.getChatComponent().getUnformattedText().contains("狗篮子") || packet.getChatComponent().getUnformattedText().contains("登峰造极") || packet.getChatComponent().getUnformattedText().contains("气急败坏")){
                event.cancelEvent();
		        }
            }
		if(Name.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("胖胖") || packet.getChatComponent().getUnformattedText().contains("getdown") || packet.getChatComponent().getUnformattedText().contains("smg")) {
                event.cancelEvent();
		        }
            }
		if(AutoL.get() == true) {
		    if(packet.getChatComponent().getUnformattedText().contains("L")) {
                event.cancelEvent();
		        }
            }
	    }			
	}
    
    this.onUpdate = function () {}
	this.addValues = function(values) {
		values.add(Group);
		values.add(Box);
		values.add(AutoL);
		values.add(PenShen);
		values.add(Inside);
		values.add(Shop);
		values.add(Config);
        values.add(Free);
        values.add(Name)
		values.add(DIYKeyWord)
        values.add(AutoLBUG)
	}
}
function DIYKeyWord() {
    this.getName = function () {
        return "DIYKeyWord";
    }

    this.getAliases = function () {
        return ["DIY"];
    }

    this.execute = function (args) {
        if (args.length < 2) {
            chat.print("§c[AquaVit]§a指令错误: .DIYKeyWord <add>");
            return;
        }
		var writer = new BufferedWriter(new FileWriter(mc.mcDataDir + "/DIYcontent.txt",true));
		writer.write(args[2]);
		writer.newLine();
		writer.close();

        switch (args[1].toLowerCase()) {
            case "add":
                if (args.length < 3) {
                    chat.print("§c[AquaVit]§a指令错误: .DIYKeyWord add <关键词>");
                    return;
                }
				chat.print("§c[AquaVit]§a已经添加关键词" + args[2]);

                break;


            default:
                chat.print("§c[AquaVit]§a指令错误: .DIYKeyWord <add>");
        }
    }
}
var SpammerDelete = new SpammerDelete();
var DIYKeyWord = new DIYKeyWord();
var SpammerDeleteCilent;
var DIYKeyWordClient;

function onLoad() {}

function onEnable() {
    SpammerDeleteCilent = moduleManager.registerModule(SpammerDelete);
	DIYKeyWordClient = commandManager.registerCommand(DIYKeyWord);
}

function onDisable() {
    moduleManager.unregisterModule(SpammerDeleteCilent);
	commandManager.unregisterCommand(DIYKeyWordClient);
}