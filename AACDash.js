var scriptName = "AACDash";
var scriptVersion = 1.0;
var scriptAuthor = "AquaVit";

var BlinkModule = moduleManager.getModule("Blink");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var C02PacketUseEntity = Java.type('net.minecraft.network.play.client.C02PacketUseEntity');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition')
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C07PacketPlayerDigging = Java.type('net.minecraft.network.play.client.C07PacketPlayerDigging');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement');
var AACDash = new AACDash();
var client;

function AACDash() {
	var MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils')
	var ArrayList = Java.type('java.util.ArrayList');
	var LinkedList = Java.type('java.util.LinkedList');
    this.getName = function() {
        return "AACDash";
    };

    this.getDescription = function() {
        return ":/";
    };

    this.getCategory = function() {
        return "Fun";
    };
    this.onEnable = function() {
		BlinkModule.setState(true);
		mc.thePlayer.sendQueue.addToSendQueue(new LinkedList(mc.thePlayer.posX, mc.thePlayer.getEntityBoundingBox().minY + (mc.thePlayer.getEyeHeight() / 2)));
		mc.thePlayer.sendQueue.addToSendQueue(new LinkedList(mc.thePlayer.posX, mc.thePlayer.getEntityBoundingBox().minY, mc.thePlayer.posZ));		    
    }
    this.onUpdate = function() {
		mc.thePlayer.sendQueue.addToSendQueue(new LinkedList(mc.thePlayer.posX, mc.thePlayer.getEntityBoundingBox().minY, mc.thePlayer.posZ));
	}
    this.onDisable = function () {
		mc.timer.timerSpeed = 1.0;
		if(mc.thePlayer == null)
            return;
		BlinkModule.setState(false);
    }
    this.onMotion = function () {
        if(MovementUtils.isMoving()) {
            mc.timer.timerSpeed = 1.0;

            if(mc.thePlayer.onGround) {
                MovementUtils.strafe(8.0);
                mc.thePlayer.motionY = 0.42;
            }
            MovementUtils.strafe(8.0);
        } else {
            mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
        }
    }
	this.onPacket = function(event) {
	var packet = event.getPacket();
    if(mc.thePlayer == null)
        return;	
    if (packet instanceof C03PacketPlayer) {
        
	    }
    if (packet instanceof C03PacketPlayer.C04PacketPlayerPosition || packet instanceof C03PacketPlayer.C06PacketPlayerPosLook || packet instanceof C08PacketPlayerBlockPlacement || packet instanceof C0APacketAnimation || packet instanceof C0BPacketEntityAction || packet instanceof C02PacketUseEntity) {
        
		mc.thePlayer.sendQueue.addToSendQueue(new ArrayList());
	    }
	}
}
function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(AACDash);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}